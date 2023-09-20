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
      {
        image:
          "https://radartasikmalaya.tv/wp-content/uploads/2023/05/Cuplikan-layar-2023-05-28-203407.png",
        product_name: "Juz Alpukat",
        description: "",
        category_id: 2,
        price: 23000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://assets.digination.id/crop/0x0:0x0/x/photo/2019/08/29/2572808672.jpg",
        product_name: "Juz Mangga",
        description: "",
        category_id: 2,
        price: 19000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://img.okezone.com/content/2022/08/18/298/2650270/12-manfaat-jus-buah-naga-merah-gak-cuma-untuk-kesehatan-tubuh-0Yk9FIiZnJ.jpg",
        product_name: "Juz Buah Naga",
        description: "",
        category_id: 2,
        price: 25000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://miro.medium.com/v2/resize:fit:750/1*X5VvKui57f6z8GRcnvUkig.jpeg",
        product_name: "Juz Jeruk",
        description: "",
        category_id: 2,
        price: 12000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://www.tastesoflizzyt.com/wp-content/uploads/2023/04/how-to-make-a-milkshake-with-ice-cream-15.jpg",
        product_name: "Milkshake Ice Cream Coklat",
        description: "",
        category_id: 2,
        price: 18000,
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
