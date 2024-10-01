import mongoose from "mongoose";
import { DB_NAME } from "./constants";















/*
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    app.on("error", (err) => {
      console.log("err", err);
      throw err;
    })

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on part ${process.env.PORT}`);
    });

  } catch (err) {
    console.log(err)
  }
})()
  */