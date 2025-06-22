require("dotenv").config();
import mongoose from "mongoose";

const uri: string = process.env.DATABASE_URL || "";


const main = async () => {
  try {
    // Try to connect to MongoDB using mongoose
    await mongoose.connect(uri).then((data: typeof mongoose) => {
      // Log a success message with host and port details
      console.log(
        `DB connected with host: ${data.connection.host} and port: ${data.connection.port}`
      );
    });
  } catch (error) {
    // If an error occurs during connection
    if (error instanceof Error) {
      // Log the error message for debugging
      console.log(`Database connection failed! error- ${error.message}`);

      // Retry connection after 5 seconds
      setTimeout(main, 5000);
    }
  }
};

export default main;