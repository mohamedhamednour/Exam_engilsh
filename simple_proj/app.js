import express from "express";

import std from "./routes/route.js"
var app = express();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
})
const port = 5000;
app.use(express.json());
app.use(express.urlencoded()) // extended = true is the default


app.get("/", function (req, res) {
  res.send('home');
});

app.use('/user', std)
// app.use("/rondem",std)

// app.use('/student',std)
// app.use('/degre',std)


app.listen(port, () => {
  console.log(`port ${port}`);
});
