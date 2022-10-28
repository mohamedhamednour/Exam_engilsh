import express from "express";
import fs from "fs";

const router = express.Router();

let rawdata = fs.readFileSync("./asset/TestData.json", "utf8");

let student = JSON.parse(rawdata);
var Rank;
router.get("/", (req, res) => {
  res.send("student");
});

router.get("/student", function (req, res) {
  let ar =
    student.wordList[
      Object.keys(student.wordList)[
        Math.floor(Math.random() * Object.keys(student.wordList).length)
      ]
    ];
  res.send(ar);
});

router.post("/apipost", (req, res) => {
  //   const ids = student.wordList.length + 1;
  var rank_ = req.body;
  var Less_ranks = [];

  for (let i = 0; i < student.scoresList.length; i++) {
    if (student.scoresList[i] < rank_) {
      Less_ranks.push(student.scoresList[i]);
    }
  }
   Rank = Less_ranks.length + 1;
   console.log(Rank);
  
  res.send(
    `req.body is ${JSON.parse(req.body)} and Less_ranks ${Less_ranks}`
  );
});
router.get("/rank", (req, res) => {
  res.send(JSON.stringify(Rank));
});
export default router;
