const express = require("express");
const path =  require("path");
const {productsRouter, usersRouter} = require("./routes");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "view", "home.html"));
})

app.use("/products", productsRouter);
app.use("/users", usersRouter);
    
app.use((req, res) => {
    console.log(slkds);
    res.status(404).send("<h1>404 Not Found</h1>");
});

app.use((err, req, res, next) => {
    res.status(500).send("<h1>500 Sever Error</h1>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));