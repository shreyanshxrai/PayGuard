import { type Request, type Response, type NextFunction } from "express";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode("PASS123");

export interface AuthRequest extends Request {
  user?: {
    id: number;
    email: string;
  };
}

export async function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) {
  try {
    const token = req.cookies["auth-token"];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const { payload } = await jwtVerify(token, secret);

    req.user = {
      id: Number(payload.id),
      email: String(payload.email),
    };

    next();
  } catch (error) {
    next(error);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
}
