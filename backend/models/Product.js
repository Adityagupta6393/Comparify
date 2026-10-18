import mongoose from 'mongoose';

const productSchema =  new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },

    brand : {
        type : String,
        required : true,
        trim : true
    },

    model : {
        type : String,
        required : true,
        trim : true
    },

    category : {
        type : String,
        required : true,
        trim : true
    },

    description : {
        type : String,
        default : '',
        trim : true
    },

    normalizedBrand : {
        type : String,
        required : true,
        trim : true
    },

    normalizedModel : {
        type : String,
        required : true,
        trim : true
    },

    specifications : {
        type : mongoose.Schema.Types.Mixed,
        required : true,
        default : {}
    },

    images : {
        type : [String],
        default : []
    },

}, { timestamps : true });

const Product = mongoose.model('Product', productSchema);

export default Product;