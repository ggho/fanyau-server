
var firebase = require("firebase");

// Initialize the app with a service account, granting admin privileges
firebase.initializeApp({
  serviceAccount: "FanYau Server-da5ede45d3c3.json",
  databaseURL: "https://fanyau-server.firebaseio.com/"
});

var database = firebase.database();

module.exports = database;
