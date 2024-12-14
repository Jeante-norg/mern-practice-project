import express from "express";
import dotenv from "dotenv";
import Product from "./models/product.model.js";
import { connectDB } from "./config/db.js";
dotenv.config({ path: "./.env" });




const app = express();
const port = 5000;

app.use(express.json()); //the middle ware that helps us to parse the req.body into json format
app.post("/products", async (req, res) => {
    // res.send("The 5 AM club");
    const product = req.body; //user will send this data
    console.log(req.body)

    if (!product.name || !product.price || !product.image) {
        res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newProduct = new Product(product);

    try {
        newProduct.save(); //saves it to the database.                                                                                                                                                                                                                                                                          
        res.status(201).json({ success: true, data: newProduct })
    } catch (error) {
        console.log("error creating the product.");
        res.status(500).json({ success: false, message: "Server error" });
    }
})
// console.log("MONGO_URI:", process.env.MONGO_URI);

console.log(process.env.MONGO_URI);



app.listen(port, () => {
    connectDB();
    console.log(`Server is running at http://localhost:${port}`);
})