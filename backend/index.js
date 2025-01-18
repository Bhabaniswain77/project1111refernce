import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";


//mongo import
import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

//PG CONFIG
import { dbConfig } from '../backend/db/connectPG.js';
import pg from 'pg';
import { addProduct, getallProducts } from "./controllers/pgproduct.controller.js";
const { Pool } = pg

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const __dirname = path.resolve();


app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "http://localhost:5173", credentials: true }));


app.use(cookieParser()); // allows us to parse incoming cookies


if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.use("/api/auth", authRoutes);

app.use(express.json()); // allows us to parse incoming requests:req.body

app.listen(PORT, () => {
	connectDB();
	console.log("Server is running on port: ", PORT);
});


//pg test run
const pool = new Pool(dbConfig);


//add product
app.use('/addProduct', addProduct);
app.use('/allProducts',getallProducts);

pool.connect((err, client) => {
	if (err) {
		console.log("Error in connection");
	} else {
		console.log("Connected to PG succesfully");
	}
})






