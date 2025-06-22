import { Server } from "http";
require("dotenv").config();
import mongoose from "mongoose";
import app from "./app";
let server: Server;
const uri: string = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@freecluster.jgbfw7q.mongodb.net/?retryWrites=true&w=majority&appName=freeCluster`;
async function main() {
  try {
    
    await mongoose.connect(uri);
    server = app.listen(process.env.PORT, () => {
      console.log("App is listening on port ", process.env.PORT);
    });
  } catch (error) {
    console.log(error);
  }
}
main();