const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const mysql = require('mysql2')
const exphbs = require('express-handlebars');
const path = require('path')

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

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/views/layouts/main.handlebars'))
);

app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/homeRoutes'));

sequelize.sync().then(() => {
    app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`));
});
