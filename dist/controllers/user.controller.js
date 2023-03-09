"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const User_model_1 = require("../models/User.model");
class UserController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield User_model_1.User.find();
            return res.json(users);
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            const user = yield User_model_1.User.findById({ _id: userId });
            return res.json(user);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const user = yield User_model_1.User.create(Object.assign({}, body));
                return res.json({ message: "User created", data: user });
            }
            catch (e) {
                console.log(e.message);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId } = req.params;
                const user = req.body;
                const updatedUser = yield User_model_1.User.updateOne({ _id: userId }, Object.assign({}, user));
                return res.json({
                    message: "User updated",
                    data: updatedUser,
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            yield User_model_1.User.deleteOne({ _id: userId });
            return res.json({
                message: "User deleted",
            });
        });
    }
}
exports.userController = new UserController();
