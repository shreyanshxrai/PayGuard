import express from "express";
import cors from "cors";
import transactionRouter from "./routes/transaction.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { requestLogger } from "./middleware/requestLogger.js";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { prisma } from "@repo/db";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://paygaurdshreyanshxrai.vercel.app",
      "https://pay-guard-33dd-452fks6pk-shreyanshxrais-projects.vercel.app",
      "https://pay-guard-33dd.vercel.app",
    ],
    credentials: true,
  }),
);
app.use(requestLogger);
app.use(cookieParser());
app.use(express.json());
app.use(errorHandler);

app.get("/health", async (_, res) => {
  try {
    const users = await prisma.user.count();

    return res.json({
      success: true,
      users,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error,
    });
  }
});

app.use("/transaction", transactionRouter);

const PORT = Number(process.env.PORT) || 3001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Express server running on port ${PORT}`);
});
