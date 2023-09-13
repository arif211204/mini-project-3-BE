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
    await queryInterface.bulkInsert("products", [
      {
        image:
          "https://content.jdmagicbox.com/comp/palakkad/z9/9999px491.x491.110302132630.s3z9/catalogue/arc-cofe-say-palakkad-coffee-shops-833hy.jpg?clr=",
        product_name: "Cofee latte",
        description: "Varian love",
        category_id: 1,
        price: 12000,
        stock: 12,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/intro-1645231221.jpg",
        product_name: "Cofee Branc",
        description: "Kopi hitam",
        category_id: 1,
        price: 20000,
        stock: 12,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://img.kurio.network/zkxts4Doj0lxAEfWlYEAlDObnhg=/320x320/filters:quality(80)/https://kurio-img.kurioapps.com/21/06/07/01cf89ef-14a4-4cd0-ac89-20a64fa92539.jpe",
        product_name: "Cofee Caramel",
        description: "Varian Es",
        category_id: 1,
        price: 200000,
        stock: 12,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2016/01/best-cafes-coffee-shops-kemang-jakarta-indonesia-900x642.jpg",
        product_name: "Best Coffee",
        description: "Varian love",
        category_id: 1,
        price: 12000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2016/01/best-cafes-coffee-shops-kemang-jakarta-indonesia-900x642.jpg",
        product_name: "Best Coffee",
        description: "Varian love",
        category_id: 1,
        price: 12000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2016/01/best-cafes-coffee-shops-kemang-jakarta-indonesia-900x642.jpg",
        product_name: "Best Coffee",
        description: "Varian love",
        category_id: 1,
        price: 12000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2016/01/best-cafes-coffee-shops-kemang-jakarta-indonesia-900x642.jpg",
        product_name: "Best Coffee",
        description: "Varian love",
        category_id: 1,
        price: 12000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2016/01/best-cafes-coffee-shops-kemang-jakarta-indonesia-900x642.jpg",
        product_name: "Best Coffee",
        description: "Varian love",
        category_id: 1,
        price: 12000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2016/01/best-cafes-coffee-shops-kemang-jakarta-indonesia-900x642.jpg",
        product_name: "Best Coffee",
        description: "Varian love",
        category_id: 1,
        price: 12000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2016/01/best-cafes-coffee-shops-kemang-jakarta-indonesia-900x642.jpg",
        product_name: "Best Coffee",
        description: "Varian love",
        category_id: 1,
        price: 12000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2016/01/best-cafes-coffee-shops-kemang-jakarta-indonesia-900x642.jpg",
        product_name: "Best Coffee",
        description: "Varian love",
        category_id: 1,
        price: 12000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2016/01/best-cafes-coffee-shops-kemang-jakarta-indonesia-900x642.jpg",
        product_name: "Best Coffee",
        description: "Varian love",
        category_id: 1,
        price: 12000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
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
