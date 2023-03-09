import { NextFunction, Request, Response } from "express";

import { User } from "../models/User.model";

class UserMiddleware {
  public async getByIdAndThrow(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { userId } = req.params;

      const user = User.findById(userId);

      if (!user) {
        throw new Error("User not found");
      }

      next();
    } catch (e) {
      res.json({
        message: e.message,
      });
    }
  }
}

export const userMiddleware = new UserMiddleware();
