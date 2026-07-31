import express from "express";
import cors from "cors";
import transactionRouter from "./routes/transaction.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/health", (_, res) => {
  res.status(200).json({
    success: true,
    message: "PayGuard Express API is running",
  });
});
app.use(errorHandler);
app.use("/transaction", transactionRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
