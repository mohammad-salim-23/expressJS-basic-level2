"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5000;
// parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
// Router
const userRouuter = express_1.default.Router();
app.use("/", userRouuter);
userRouuter.post("/api/v1/users/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created successfully",
        data: user
    });
});
app.get("", (req, res) => {
    console.log(req.query.name);
    //  console.log(req.params.userId,req.params.subId)
    res.send('Hello Duniya!');
});
app.post("/", (req, res) => {
    // res.send("got data");
    res.json({
        message: "Successfully received data"
    });
});
exports.default = app;
