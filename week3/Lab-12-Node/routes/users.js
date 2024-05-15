const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res)=> {
    console.log(slkds);
    res.sendFile(path.join(__dirname, "..", "view", "users.html"))
})

router.post("/", (req, res) => {
    res.status(201).json(req.body)
});

module.exports = router