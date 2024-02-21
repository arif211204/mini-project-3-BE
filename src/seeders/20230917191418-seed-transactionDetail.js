"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("TransactionDetails", [
      {
        transaction_id: 1,
        product_id: 1,
        quantity: 3,
        unit_price: 20000,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        transaction_id: 2,
        product_id: 2,
        quantity: 4,
        unit_price: 15000,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("TransactionDetails", null, {});
  },
};
