import { Router } from "express";

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

router.post("/send", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Transaction endpoint reached.",
  });
});

export default router;