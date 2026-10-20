import Product from "../models/Product.js";
import normalizeText from "../utils/normalizeText.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const postProduct = asyncHandler(async (req, res) => {
    const {name, brand, model , category, description, specifications } = req.body;
    
    if(!name || !brand || !model ||!category){
        res.status(400).json({
            success : false,
            message : "name, brand, model and category are required."
        })
    }

    const normalizedBrand = normalizeText(brand);
    const normalizedModel = normalizeText(model);

    const product = await Product.create({name, brand, model, category, normalizedBrand, normalizedModel, description, specifications});

    return res.status(201).json({ success : true, message : "Product created successfully", data : product});
});

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find().sort({createdAt : -1});

    return res.status(200).json({ 
        success: true, 
        message : "Products fetched successfully.", 
        count : products.length , 
        data : products
    });
});

export { postProduct , getProducts };