var express = require("express");
var fs = require("fs");
var app = express();

// add middleware function for body parsing
var bodyParser = require("body-parser");
const { log } = require("console");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("hello it is my first express application");
});

// read data from a file
app.get("/getstudents", function (req, res) {
  studentData = {};
  fs.readFile(__dirname + "/" + "student.json", "utf-8", function (err, data) {
    console.log(data);
    res.json({
      status: true,
      status_code: 200,
      "requested at": req.localtime,
      requrl: req.url,
      "request method": req.method,
      studentdata: JSON.parse(data),
    });
  });
});

// searching the json file
app.get("/GetStudentid/:id", (req, res) => {
  studentdata = {};
  fs.readFile(__dirname + "/" + "student.json", "utf-8", function (err, data) {
    var students = JSON.parse(data);
    var student = students["student" + req.params.id];
    // console.log(students["student2"]);
    console.log("student", student);
    if (student) res.json(student);
    else
      res.json({
        status: true,
        Status_Code: 200,
        "requested at": req.localtime,
        requrl: req.url,
        "request Method": req.method,
        studentdata: JSON.parse(data),
      });
  });
});

// student info
app.get("/studentinfo", function (req, res) {
  res.sendFile("StudentInfo.html", { root: __dirname });
});

//
app.post("/submit-data", function (req, res) {
  var name = req.body.firstName + "" + req.body.lastName + "";
  var Age = req.body.myAge;
  var qual = req.body.Qual;
  console.log(req.body.qual);
  res.send({
    status: true,
    message: "form details",
    data: {
      name: name,
      age: Age,
      Gender: req.body.gender,
      Qualification: qual,
    },
  });
});

//
app.listen(5001, function () {
  console.log("Server is running on port 5000");
});
