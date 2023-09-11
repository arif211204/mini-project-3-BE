"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        fullname: "alan",
        email: "alan@mail.com",
        password: "alan",
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
        role: 1,
      },
      {
        fullname: "benjamin",
        email: "benjamin@mail.com",
        password: "benjamin",
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
        role: 2,
      },
      {
        fullname: "claudia",
        email: "claudia@mail.com",
        password: "claudia",
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
        role: 3,
      },
      {
        fullname: "David",
        email: "David@mail.com",
        password: "David",
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
        role: 4,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
