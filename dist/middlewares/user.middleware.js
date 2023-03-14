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
exports.userMiddleware = void 0;
const api_error_1 = require("../errors/api.error");
const User_model_1 = require("../models/User.model");
class UserMiddleware {
    getByIdAndThrow(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId } = req.params;
                const user = yield User_model_1.User.findById(userId);
                if (!user) {
                    throw new api_error_1.ApiError("User not found", 404);
                }
                next();
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.userMiddleware = new UserMiddleware();
