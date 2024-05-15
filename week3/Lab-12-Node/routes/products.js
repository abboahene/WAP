const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "view", "products.html"))
});

router.post("/", (req, res) => {
    res.status(201).send("Products saved!!")
})

module.exports = router