"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        id: 1,
        role_id: 1,
        image_profie: "",
        first_name: "Andre",
        last_name: "Riyanto",
        email: "andreriyanto@mail.com",
        password: "andre",
        gender: "male",
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        id: 2,
        role_id: 2,
        image_profie: "",
        first_name: "Ucup",
        last_name: "Riwa",
        email: "ucup@mail.com",
        password: "ucup",
        gender: "male",
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        id: 3,
        role_id: 2,
        image_profie: "",
        first_name: "marisa",
        last_name: "aulia",
        email: "marisa@mail.com",
        password: "marisa",
        gender: "female",
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        id: 4,
        role_id: 2,
        image_profie: "",
        first_name: "reni",
        last_name: "risti",
        email: "reni@mail.com",
        password: "reni",
        gender: "female",
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
