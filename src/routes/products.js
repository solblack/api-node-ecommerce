import express from "express";
import productController from "../controllers/productController";

const productsRouter = express.Router();

// get products
productsRouter.get("/", productController.list);

// get product by id
productsRouter.get("/:id", productController.show);

// create a new product
productsRouter.post("/", productController.create);

// edit a product by id
productsRouter.put("/:id", productController.edit);

// delete a product by id - This endpoint "soft-deletes" an item setting "active" property as false
productsRouter.delete("/:id", productController.delete);

export default productsRouter;
