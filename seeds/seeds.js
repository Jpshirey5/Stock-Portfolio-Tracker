const sequelize = require('../config/connection');
const seedUser = require('./userInput')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedUser()


  process.exit(0);
};

seedDatabase();
