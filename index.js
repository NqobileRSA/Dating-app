import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// envrivonmnet variables
const port = process.env.PORT || 9000;
const connection_url = `mongodb+srv://nqobilengobeni72:nqobile089@chat-cluster.uyqdpn3.mongodb.net/`;
// middleware

// db config

// API endpoints
// get - takes data from server to client
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

// listen to the app
app.listen(port, () => console.log(`listening to port : ${port}`));
