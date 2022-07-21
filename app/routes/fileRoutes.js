const express = require("express");
const router = express.Router();

const uploadController = require("../controller/upload");

const fileRoutes = express.Router({ mergeParams: true });

fileRoutes.route('/upload')
    .post(async(req, res) => {
        await uploadController.uploadFiles(req, res);
    });

fileRoutes.route('/files')
    .get(async(req, res) => {
        await uploadController.getListFiles(req, res);
    });


fileRoutes.route('/files/:name')
    .get(async(req, res) => {
        await uploadController.download(req, res);
    });
/* router.post("/upload", uploadController.uploadFiles);
router.get("/files", uploadController.getListFiles);
router.get("/files/:name", uploadController.download);
/* fileRoutes.route('/files/:name')
    .get(async(req, res) => {
        await uploadController.download2(req, res);
    }); */

module.exports = fileRoutes;