import { Router } from "express";
import { authMiddleware } from "../middleware/auth.js";
import { verifierMiddleware } from "../middleware/verifier.js";

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

router.post("/send", authMiddleware, verifierMiddleware, (req, res) => {
  return res.json({
    success: true,
    message: "Authenticated successfully",
  });
});

export default router;
