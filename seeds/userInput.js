const { User } = require('../models/user');

const userData = [
    {
      "email": "jayshirey14@gmail.com",
      "password": "deathstar"
    },
    {
      "email": "austinnobregas@gmail.com",
      "password": "11111111"
    },
    {
      "email": "dannyedouard@gmail.com",
      "password": "skywalker"
    }
]
  
const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser