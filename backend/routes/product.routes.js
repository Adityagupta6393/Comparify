import express from "express";
import { postProduct, getProducts } from "../controllers/product.controller.js";


const router = express.Router();

router.post("/", postProduct);
router.get("/", getProducts);

export default router;