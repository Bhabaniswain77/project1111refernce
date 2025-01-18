import express from "express";
const app = express();
import cors from "cors";
import { dbConfig } from '../db/connectPG.js';

import pg from 'pg';
const { Pool } = pg


const pool = new Pool(dbConfig);


app.use(cors());
app.use(express.json());

//create a product

export const addProduct = async (req, res) => {
    try {
        const { p_id, p_image, p_name, p_price, p_desc } = req.body;
        const newProduct = await pool.query("INSERT INTO products (p_id,p_image,p_name,p_price,p_desc) VALUES ($1,$2,$3,$4,$5)", [p_id, p_image, p_name, p_price, p_desc]
        );

        res.json(newProduct);

        res.status(201).json({
            success: true,
            message: "Product added successfully",
            product: newProduct.rows[0],  // Return inserted product
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

//get all products
export const getallProducts = async (req, res) => {
    try {
        const allproducts = await pool.query("SELECT * FROM products")
        res.json(allproducts.rows)
    } catch (err) {
        console.log(err.message);
    }
}

//get a product


//update a product


//delet a product