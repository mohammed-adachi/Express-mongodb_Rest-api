import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute  from "./Routes/routesAuth.js";
import UserRoute from "./Routes/UserRoute.js";


const app = express();
const PORT = process.env.PORT || 3000;
const uri = 'mongodb://localhost:27017/social_db';

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();
mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Listening at: ${PORT}`)
    )
  )
  .catch((error) => console.log(error));
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);