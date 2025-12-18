import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/database";
import transactionRoute from "./routes/transactionRoute"

dotenv.config()
const app = express();
const port = process.env.PORT

app.use(express.json());
app.use("/transactions", transactionRoute);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log("Failed to start server:", error)
  }
};

startServer()
export default app;