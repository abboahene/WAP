const express = require("express");
const booksRouter = require("./routers/books.router");

const app = express();

app.use(express.json());

app.use("/books", booksRouter);

app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server running on: ${port}`));