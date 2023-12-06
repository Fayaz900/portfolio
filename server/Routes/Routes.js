const express = require("express");
const router = express.Router();
const {getAll,addProject} = require('../Controller/Control')

router.get("/getall",getAll);
router.post("/add",addProject);


module.exports = router;