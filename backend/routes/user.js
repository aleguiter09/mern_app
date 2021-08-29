const express = require("express");
const userRoutes = express.Router();

const dbo = require("../db/conn");

// Get all users
userRoutes.route("/user").get((req, res) => {
  let db_connect = dbo.getDb();
  db_connect
    .collection("users")
    .find({})
    .toArray((err, result) => {
      if (err) throw err;
      res.json(result);
    });
});

// Add a user
userRoutes.route("/user/add").post((req, res) => {
  let db_connect = dbo.getDb();
  let myobj = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  db_connect.collection("users").insertOne(myobj, (err, res) => {
    if (err) throw err;
  });
  res.status(200).send("User added");
});

// Find user by username
userRoutes.route("/user/:username").get((req, res) => {
  let db_connect = dbo.getDb();
  let myquery = { username: req.body.username };
  db_connect.collection("users").findOne(myquery, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Update a user
userRoutes.route("/user/:username").post((req, res) => {
  let db_connect = dbo.getDb();
  let myquery = { username: req.body.username };
  let newvalues = {
    $set: {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    },
  };
  db_connect
    .collection("users")
    .updateOne(myquery, newvalues, (err, result) => {
      if (err) throw err;
    });

  res.status(200).send("User updated");
});

// Delete a user
userRoutes.route("/user/:username").delete((req, res) => {
  let db_connect = dbo.getDb();
  var myquery = { username: req.body.username };
  db_connect.collection("users").deleteOne(myquery, (err, obj) => {
    if (err) throw err;
  });
  res.status(200).send("User deleted");
});

module.exports = userRoutes;
