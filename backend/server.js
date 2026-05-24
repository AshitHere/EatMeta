import dotenv from "dotenv";
dotenv.config();


console.log("Stripe Key:", process.env.STRIPE_SECRET_KEY);

import express from "express";
import cors from "cors";
import foodRouter from "./routes/foodroute.js";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";

import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
// app config
const app = express();
const port = process.env.PORT || 4000;
// middleware
app.use(express.json());
app.use(cors());
// routes
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
// database connection
console.log(process.env.ATLAS_PWD);
connectDB();
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});

//mongodb+srv://ashitkumar023_db_user:Ashitk$023@cluster0.g1wcqer.mongodb.net/?