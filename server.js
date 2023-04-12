const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const mysql = require('mysql2')
const exphbs = require('express-handlebars');
const path = require('path')
const jwt = require('jsonwebtoken');
const hbs = exphbs.create({});


const sequelize = require('./config/connections');


const app = express();
const PORT = process.env.PORT || 3306;
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// set up the MySQL database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "stocks_db",
});

// test the database connection
db.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err);
    } else {
        console.log("Connected to database!");
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(require('./controllers/homeRoutes'));


// app.get('/', (req, res) =>
// res.render(path.join(__dirname, '/views/main.handlebars'))
// );


// Define a route for registering
app.get('/login', (req, res) => {
    // Render the register view
    res.render('add');
  });

// Define a route for registering
app.get('/register', (req, res) => {
    // Render the register view
    res.render('register');
  });
  


// Authentication Cookies Section below
// Variables

const secretKey = 'password';
// Creating the Token
const token = jwt.sign({ userId: 'name', role: 'admin' }, secretKey, { expiresIn: '1h' });
// Setup
app.get('/setcookie', (req, res) => {
    res.cookie('authToken', token, { maxAge: 3600000, httpOnly: true });
    res.send('Auth has been set');
});
// Access through subsequent requests
app.get('/dashboard', (req, res) => {
    const authToken = req.cookies.authToken;
    try {
        const decodedToken = jwt.verify(authToken, secretKey);
        const userId = decodedToken.userId;
        const role = decodedToken.role;
        // Check if the user has the necessary role to access
        if (role === 'admin') {
            res.send('Welcome to the dashboard!');
        } else {
            res.status(401).send('Unauthorized');
        }
    } catch (err) {
        res.status(401).send('Unauthorized');
    }
});


sequelize.sync().then(() => {
    app.listen(PORT, () =>
        console.log(`App listening at http://localhost:${PORT}`));
});
