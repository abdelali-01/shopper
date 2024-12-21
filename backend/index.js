import express from 'express' ;
import mongoose from 'mongoose';
import jsonwebtoken from 'jsonwebtoken';
import multer from 'multer';
import bcrypt from 'bcrypt' ;
import path from 'path' ;
import cors from 'cors' ;
import {Product} from './models/Product.js'

const app = express();
const port = 3011 ;

app.use(express.json());
app.use(cors());


// create uploading system 

app.use("/images" , express.static("upload/images"));

const storage = multer.diskStorage({
    destination : "upload/images",
    filename : (req , file , cb)=>{
        return cb(null , `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage : storage});

app.post("/upload", upload.single('image') , (req,res )=>{
    if (!req.file) {
        return res.status(400).json({ success: 0, message: "No file uploaded" });
    }
    res.json({ 
        success : 1 ,
        image_url : `http://localhost:${port}/images/${req.file.filename}`
    });
});


// create the addproduct path 
app.post('/addproduct' ,async (req ,res)=>{
    const data = req.body ;
    try {
        const product = new Product(data);
        await product.save();

        res.status(200).send("product add succesfuly");
        
    } catch (error) {
        res.status(400).send(error);
    }
});

// remove product 
app.delete('/removeproduct/:id' ,async (req, res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).send("product deleted succesfuly");
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error : error
        });
    }

});
// get all products 
app.get("/allproduct" ,async (req ,res)=>{
    try {
        let products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(400).send(error)
    }
})

// connect to database localy 

mongoose.connect(`mongodb://127.0.0.1:27017/Ecom-store`).then(
    ()=>{
        console.log("connected to database");

        // run the express server
        app.listen(port , ()=>{
            console.log("server running at port " + port);
            
        })
    }
) 

