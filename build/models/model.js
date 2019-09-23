"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "user must provide name"],
    },
    dob: {
        type: Date,
        required: [true, "please provide dob"],
    },
    email: {
        type: String,
        required: [true, "please provide email"],
        unique: true,
    }
});
exports.UserData = mongoose_1.default.model("users", userSchema);
//# sourceMappingURL=model.js.map