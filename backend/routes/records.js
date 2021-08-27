const express = require("express");

const recordRoutes = express.Router();

const dbo = require("../db/conn");

// Get all records
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// Add a records
recordRoutes.route("/record/add").post(function (req, res) {
  console.log("record in asfd");
  let db_connect = dbo.getDb("MERN");
  let myobj = {
    person_name: req.body.person_name,
    person_position: req.body.person_position,
    person_level: req.body.person_level,
  };

  db_connect.collection("records").insertOne(myobj, function (err, res) {
    if (err) throw err;
    res.json(myobj);
  });
});

module.exports = recordRoutes;
