const productController = require("../controllers/productController")


const Router = require("express");

const router= Router();

router.post("/products", productController.newProduct);
router.get("/", productController.getProduct)
router.put("/:id", productController.updateProduct)
router.delete("/:id", productController.deleteProduct)


module.exports =  router;
