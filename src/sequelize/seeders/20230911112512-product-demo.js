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
      {
        image:
          "https://img.kurio.network/ewrCJ9eRNpljU-80vrqWDQkN7o4=/1200x675/filters:quality(80)/https://kurio-img.kurioapps.com/20/10/10/a7e9eaa0-1c22-42b0-a11f-0a5ad1d30126.jpeg",
        product_name: "Nasi goreng",
        description: "",
        category_id: 3,
        price: 12000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://img.kurio.network/mIAqWOXcZMFdFh5hqRODW3yEFWk=/1200x900/filters:quality(80)/https://kurio-img.kurioapps.com/22/02/06/10d46313-c9bd-46f8-86a6-a098570a36a0.jpe",
        product_name: "Ayam Bakar",
        description: "",
        category_id: 3,
        price: 18000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://asset.kompas.com/crops/cPwn7KBDXN7ALxhegAeT5jxyz80=/0x0:1000x667/750x500/data/photo/2023/05/07/6457763e0470a.jpg",
        product_name: "Ayam penyet",
        description: "",
        category_id: 3,
        price: 20000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://img-global.cpcdn.com/recipes/04654daf8c295624/1200x630cq70/photo.jpg",
        product_name: "Ikan Lele Bakar",
        description: "",
        category_id: 3,
        price: 16000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://i0.wp.com/masakanmama.com/wp-content/uploads/2021/01/Resep-Cumi-Asam-Manis.jpg?fit=1200%2C675&ssl=1",
        product_name: "Cumi Asam Manis",
        description: "",
        category_id: 3,
        price: 20000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://asset-a.grid.id/crop/0x0:0x0/700x0/photo/2019/07/24/1975029243.jpg",
        product_name: "Pisang Goreng",
        description: "",
        category_id: 4,
        price: 19000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://media.suara.com/pictures/970x544/2019/05/27/70330-dsavor.jpg",
        product_name: "Roti Bakar",
        description: "",
        category_id: 3,
        price: 14000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2019/04/02/1589474643.jpg",
        product_name: "Siomay",
        description: "",
        category_id: 3,
        price: 20000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/28/fb/92/32/nachos.jpg",
        product_name: "Nachos",
        description: "",
        category_id: 3,
        price: 17000,
        stock: 22,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        image:
          "https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2023/09/05/membuat-onion-ringjpg-20230905090615.jpg",
        product_name: "Onion Ring",
        description: "",
        category_id: 3,
        price: 16000,
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
