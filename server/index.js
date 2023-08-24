const express = require("express");
const db = require("./model/db");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const registerUser = require("./controller/user_controller.js");
const loginUser = require("./controller/login_controller.js");
const checkEmail = require("./controller/checkEmail.js");
const verifyToken = require("./controller/verifyToken.js");
const verifyAnswer = require("./controller/verifyAnswer.js");
const reset_pwd = require("./controller/reset_pwd.js");
const isSelected = require("./controller/isSelected.js");
const saveToken= require("./controller/saveToken.js");
const checkToken=require("./controller/checkToken.js");

const PORT = process.env.PORT || 5000;
app.set("view engine", "ejs");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API for registration
app.post("/user/register", registerUser);

// For login
app.post("/user/login", loginUser);

// For verifying Email
app.post("/user/verify", checkEmail);

// For verifying security answer
app.post("/user/verify_ans", verifyAnswer);

// For reset password
app.patch("/user/reset_pwd", reset_pwd);

// For Level 2
app.patch("/user/select_cand", isSelected);

// Level 2 token
app.post("/user/get_token", saveToken);

// Submit token
app.post("/user/verify_token", checkToken);
// Home page
app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});



db.connect((err) => {
  if (err)
    throw err;
  console.log("database connected");
});

app.listen(PORT);
