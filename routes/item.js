const express = require("express");

const router = express.Router();
const itemsControllers=require("../controllers/items");

router.post("./item", itemsControllers.createTodo);
router.get("./items", itemsControllers.getTodos);

// module.exports = router;
module.exports = router;