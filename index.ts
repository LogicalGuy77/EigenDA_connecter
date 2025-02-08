//@ts-nocheck
import express from "express";
import cors from "cors";
import { storeBlob } from "./src/store_blob";
import { retrieveBlob } from "./src/retrieve_blob";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

// Post request route
app.post("/api/store", async (req, res) => {
  try {
    const data = await req.body.message;
    let obj = await storeBlob(data);
    res.status(200).json({
      success: true,
      message: "Data received successfully",
      data: obj,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error processing request",
      error: error?.message,
    });
  }
});

app.post("/api/retrive", async (req, res) => {
  try {
    const { headerhash, blobindex } = await req.body;
    let obj = await retrieveBlob(headerhash, blobindex);
    res.status(200).json({
      success: true,
      message: "Data received successfully",
      data: obj,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error processing request",
      error: error?.message,
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
