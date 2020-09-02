// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var dbJson = require("./public/db/db.json")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3777;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes


// Basic route that sends the user first to the AJAX Page

// Basic route that sends the user to the save notes page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
  

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// Displays all notes
app.get("/api/notes", function(req, res) {
  return res.json(dbJson);
});

// Displays a single character, or returns false
app.post("/api/notes/:id", function(req, res) {
  

  console.log(req,body);
})

app.delete("api/notes/:id", function(req,res) {
    res.sendFile("Delete at request of /user")
})

app.get("*", function (req,res){
    res.sendFile(path.join(__dirname, index.html))
});

  
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// // Create New Characters - takes in JSON input
// app.post("/api/characters", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newCharacter = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newCharacter);

//   characters.push(newCharacter);

//   res.json(newCharacter);
// });

