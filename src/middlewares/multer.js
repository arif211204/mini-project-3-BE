// const multer = require('multer');
// const moment = require('moment');
// const express = require('express');

// const uploadFile = ({destinationFolder = "", prefix= "", filetype= ""}) => {
//     const storageConfig = multer.diskStorage({
//         destination: (req, file, cb) => {
//             cb(null, `${__dirname}/../public/images/${destinationFolder}`);
//         },
//         filename: (req, file, cb) => {
//             const fileExtension = file.mimetype.split("/")[1];
//             const filename = `${prefix}_${moment().format(
//                 'YYYY-MM-DD-hh-mm-ss'
//             )}.${fileExtension}`;
//             cb(null, filename);
//         },
//     });
//     const uploader = multer({
//         storage: storageConfig,
//         fileFilter: (req, file, cb) => {
//             if (file.mimetype.split('/')[0] != filetype) {
//                 return cb(null, false);
//             }
//             return cb(null, true);
//         },
//         limits: 25000000,
//     });
//     return uploader
// };

// module.exports = uploadFile;

const multer = require("multer");
const moment = require("moment");
const path = require("path");

const productMulter = {
  productImageUploader: () => {
    const storageConfig = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(
          null,
          path.resolve(__dirname, "..", "public", "images", "product")
        );
      },
      filename: (req, file, cb) => {
        const fileExtention = file.mimetype.split("/")[1];
        const filename = `New-Product_${moment().format(
          "YYYY-MM-DD-HH-mm-ss"
        )}.${fileExtention}`;

        cb(null, filename);
      },
    });
    const uploader = multer({
      storage: storageConfig,
      fileFilter: (req, file, cb) => {
        if (file.mimetype.split("/")[0] !== "image") {
          return cb(null, false);
        }
        return cb(null, true);
      },
      limits: 250000,
    });
    return uploader;
  },
};

module.exports = productMulter;
