import express from "express";
import { postProduct, getProducts, getProductById, updateProductById, deleteProductById} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", postProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.patch("/:id", updateProductById);
router.delete("/:id", deleteProductById);

export default router;