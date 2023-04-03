const { User } = require('../models');

const userData = [
  {
    username: "Stan",
    email: "Stan@outlook.com",
    password: "123456789"
  },
  {
    username: "Mark",
    email: "Mark@outlook.com",
    password: "123456789"
  },
  {
    username: "Jordan",
    email: "Jordan@outlook.com",
    password: "123456789"
  },
  {
    username: "Shaun",
    email: "Shaun@outlook.com",
    password: "123456789"
  },
  {
    username: "Jag",
    email: "jag@outlook.com",
    password: "123456789"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;