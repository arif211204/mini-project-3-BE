"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("transactions", [
      {
        no_inv: "INV-01-%d&fs$fvd&v645njd&76464@",
        total_price: 30000,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        no_inv: "INV-01-%dabf6567^%&sdhfh&v645njd&76464@",
        total_price: 50000,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("transactions", null, {});
  },
};
