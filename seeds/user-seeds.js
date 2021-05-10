const { User } = require('../models');

const userData = [
    {
        username: "john",
        password: "123"
    },
    {
        username: "Casey",
        password: "1234"
    },
    {
        username: "Heather",
        password: "12345"
    },
    {
        username: "Lee",
        password: "123456"
    },
    {
        username: "Aaron",
        password: "12312312"
    },
    {
        username: "Tom",
        password: "123123123"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers; 