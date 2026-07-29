import { Router } from "express";
import { authMiddleware } from "../middleware/auth.js";
import { verifierMiddleware } from "../middleware/verifier.js";
import { sendMoneyController } from "../controllers/transaction.controllers.js";

const router = Router();

/*
    POST /transaction/send

    Flow:
    Client
        ↓
    Auth Middleware
        ↓
    Verifier Middleware
        ↓
    Controller
*/

router.post("/send", authMiddleware, verifierMiddleware, sendMoneyController);

export default router;
