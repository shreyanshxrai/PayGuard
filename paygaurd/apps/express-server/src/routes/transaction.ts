import { Router } from "express";
import { authMiddleware } from "../middleware/auth.js";

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

router.post("/send", authMiddleware, (req, res) => {
  return res.json({
    success: true,
    message: "Authenticated successfully",
  });
});

export default router;
