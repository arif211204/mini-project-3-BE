"use strict";

const { UUID, UUIDV1 } = require("sequelize");

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
    const { nanoid } = require("nanoid");
    await queryInterface.bulkInsert("transactions", [
      {
        no_invoice: "ENV_" + nanoId(),
        cashier_id: 2,
        customer_name: "ujang simo",
        product_id: 2,
        total_price: 230000,
        transaction_date: Sequelize.fn("NOW"),
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        no_invoice: "ENV_" + nanoid(),
        cashier_id: 2,
        customer_name: "udin jani",
        product_id: 3,
        total_price: 230000,
        transaction_date: Sequelize.fn("NOW"),
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        no_invoice: "ENV_" + nanoid(),
        cashier_id: 3,
        customer_name: "daniel",
        product_id: 4,
        total_price: 230000,
        transaction_date: Sequelize.fn("NOW"),
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
