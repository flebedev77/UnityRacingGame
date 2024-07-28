const nocache = require("nocache");
const express = require("express");
const app = express();


app.use((req, res, next) => {
    if (req.url.includes(".gz")) {
        console.log(req.url);
        res.set({
            "Content-Encoding": "gzip"
        });
    }
    next();
})
app.use(nocache());
app.use(express.static("public"));

app.listen(8080, console.log("Server runnning port 8080"));