import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product',
        required : true,
    },

    platformName : {
        type : String,
        required : true,
        trim : true
    },

    platformUrl : {
        type : String,
        required : true,
        trim : true
    },

    externalProductId : {
        type : String,
        required : true,
        trim : true
    },

    currentPrice : {
        type : Number,
        required : true,
        min : 0
    },

    originalPriceAtSource : {
        type : Number,
        required : true,
        min : 0
    },

    discountPercentage : {
        type : Number,
        min : 0,
        max : 100
    },

    sellerName : {
        type : String,
        trim : true
    },

    rating : {
        type : Number,
        min : 0,
        max : 5
    },

    reviewCount : {
        type : Number,
        min : 0,
        validate : {
            validator : Number.isInteger,
            message : "Review count must be an integer"
        }
    },

    availability : {
        type : Number,
        enum : ["in_stock", "out_of_stock", "pre_order", "unknown"],
        default : "unknown"
    },

    productUrl : {
        type : String,
        required : true,
        trim : true
    },

    lastFetchedAt : {
        type : Date,
    }
}, { timestamps : true});

const Offer = mongoose.model('Offer', offerSchema);

export default Offer;