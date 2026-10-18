import mongoose from "mongoose";

const priceHistorySchema = new mongoose.Schema({
    offerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Offer',
        required : true
    },

    price : {
        type : Number,
        required : true,
        min : 0
    },

    recordedAt : {
        type : Date,
        default : Date.now
    }
});

const PriceHistory = mongoose.model('PriceHistory', priceHistorySchema);

export default PriceHistory;