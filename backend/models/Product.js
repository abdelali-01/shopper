import mongoose from "mongoose";

export const Product = mongoose.model("Product", new mongoose.Schema({
    name: {
        type: String,
        required: true   
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    old_price: {
        type: Number
    },
    new_price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    }
}, { timestamps: true }));