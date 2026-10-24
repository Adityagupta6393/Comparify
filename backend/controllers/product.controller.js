import Product from "../models/Product.js";
import normalizeText from "../utils/normalizeText.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const postProduct = asyncHandler(async (req, res) => {
    const { name, brand, model, category, description, specifications } = req.body;

    if (!name || !brand || !model || !category) {
        res.status(400).json({
            success: false,
            message: "name, brand, model and category are required."
        })
    }

    const normalizedBrand = normalizeText(brand);
    const normalizedModel = normalizeText(model);

    const product = await Product.create({ name, brand, model, category, normalizedBrand, normalizedModel, description, specifications });

    return res.status(201).json({ success: true, message: "Product created successfully", data: product });
});

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find().sort({ createdAt: -1 });

    return res.status(200).json({
        success: true,
        message: "Products fetched successfully.",
        count: products.length,
        data: products
    });
});

const getProductById = asyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
        return res.status(401).json({ success: true, message: "Product not found" });
    }

    return res.status(200).json({
        success: true,
        message: "Product fetched successfully.",
        data: product
    });
});

const updateProductById = asyncHandler(async (req, res) => {
    const productId = req.params.id;
    const updates = req.body;

    const product = await Product.findById(productId);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    const allowedFields = [
        "name",
        "brand",
        "model",
        "category",
        "description",
        "specifications"
    ];

    const update = {};

    allowedFields.forEach((field) => {
        if (field in updates) {
            update[field] = updates[field];
        }
    });

    if (Object.keys(updates).length === 0) {
        return res.status(400).json({
            success: false,
            message: "Please provide fields to update"
        });
    }

    Object.assign(product, update);

    await product.save();

    return res.status(200).json({
        success: true,
        message: "Product has been updated successfully",
        data: product
    });
});

const deleteProductById = asyncHandler(async (req, res) => {
    const productId = req.params.id;

    const product = await Product.findById(productId);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found."
        });
    }

    await product.deleteOne();

    return res.status(200).json({
        success: true,
        message: "Product deleted successfully."
    });
});

export { postProduct, getProducts, getProductById, updateProductById , deleteProductById};