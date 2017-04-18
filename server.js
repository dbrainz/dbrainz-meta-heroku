const express = require("express");
const multer = require("multer");

var app = express();
var upload = multer();

app.get("/", express.static("."));
app.post("/", upload.single("uploadfile"), (req,res, next) => {
    if (req.file) {
        console.log(req.file.size);
        res.end(JSON.stringify({filename: req.file.originalname, size: req.file.size}))
    }
    else {
        res.end(JSON.stringify({error: "no file chosen"}))
    }
})

app.listen(process.env.PORT || 3000 || 8080);