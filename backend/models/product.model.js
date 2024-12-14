import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true //createdAt, updatedAt NOT GETTING PRINTED CHECK ON IT LATER
})


const Product = mongoose.model('Product', productSchema);

export default Product;