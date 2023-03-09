import { Request, Response } from "express";

import { User } from "../models/User.model";
import { IMessage, IUser, IUserOperations } from "../types/user.types";

class UserController {
  public async getAll(req: Request, res: Response): Promise<Response<IUser[]>> {
    const users = await User.find();
    return res.json(users);
  }

  public async getById(req: Request, res: Response): Promise<Response<IUser>> {
    const { userId } = req.params;
    const user = await User.findById({ _id: userId });
    return res.json(user);
  }

  public async create(
    req: Request,
    res: Response
  ): Promise<Response<IUserOperations<IUser>>> {
    try {
      const body = req.body;
      const user = await User.create({ ...body });
      return res.json({ message: "User created", data: user });
    } catch (e) {
      console.log(e.message);
    }
  }

  public async update(
    req: Request,
    res: Response
  ): Promise<Response<IUserOperations<IUser>>> {
    try {
      const { userId } = req.params;
      const user = req.body;
      const updatedUser = await User.updateOne({ _id: userId }, { ...user });
      return res.json({
        message: "User updated",
        data: updatedUser,
      });
    } catch (e) {
      console.log(e);
    }
  }

  public async delete(
    req: Request,
    res: Response
  ): Promise<Response<IMessage>> {
    const { userId } = req.params;
    await User.deleteOne({ _id: userId });
    return res.json({
      message: "User deleted",
    });
  }
}

export const userController = new UserController();
