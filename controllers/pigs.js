//////////////////////////////
// Importing Deps
//////////////////////////////
import express from "express";
import pigs from "../models/data.json";
const router = express.Router();

//////////////////////////////
// Register Routes (assume they start with "/pigs/")
//////////////////////////////

// INDEX ROUTE - GETS US ALL THE DATA

// The template version - get request to /pigs
router.get("/", (req, res) => {
  res.render("pigs/index.ejs", { pigs });
});

// The API Version - get request to /pigs/api
router.get("/api", (req, res) => {
    res.json(pigs)
})


// NEW ROUTE - Renders a page with a form to create a new item

// The Templat version - get request to /pigs/new
router.get("/new", (req, res) => {
  // views/pigs/new.ejs
  res.render("pigs/new.ejs")
})

// CREATE - takes the data from the request, create a new item

//The Template version - post request to /pigs
router.post("/", (req, res) => {
  pigs.push(req.body)
  res.redirect("/pigs")
})

// The API Version - post request to /pigs/api
router.post("/api", (req, res) => {
  pigs.push(req.body)
  res.json(req.body)
})

// EDIT ROUTE - Generates a page to edit a todo
// The Template Version - get request /pigs/edit/:id
router.get("/edit/:id", (req, res) => {
  res.render("pigs/edit.ejs", {pig: pigs[req.params.id], index: req.params.id})
})


// UPDATE ROUTE - receives data from the edit form, and updates the itme
// The Template Version - put request to /pigs/:id
router.put("/:id", (req, res) => {
  pigs[req.params.id] = req.body // updates the right pig with the forms data
  res.redirect("/pigs")
})

// THe Api version - put request to /pigs/api/:id
router.put("/api/:id", (req, res) => {
  pigs[req.params.id] = req.body // updating the big
  res.json(pigs[req.params.id])
})

// Delete ROUTE - delete the specified item
// The Template Version - delete request to /pigs/:id
router.delete("/:id", (req, res) => {
  pigs.splice(req.params.id, 1) // removes the pig
  res.redirect("/pigs")
})

// THe Api version - delete request to /pigs/api/:id
router.delete("/api/:id", (req, res) => {
  const pig = pigs.splice(req.params.id, 1) // removes the pig
  res.json({removed: pig})
})


// SHOW ROUTE - GETS US THE DATA ON ONE ITEM

// The template version - get request to /pigs/:id
router.get("/:id", (req, res) => {
    const pig = pigs[parseInt(req.params.id)] // turn string param into number, use as index for desired pig
    res.render("pigs/show.ejs", { pig, index: req.params.id});
  });
  
  // The API Version - get request to /pigs/api/:id
  router.get("/api/:id", (req, res) => {
      const pig = pigs[parseInt(req.params.id)] // turn string param into number, use as index for desired pig
      res.json(pig)
  })



//////////////////////////////
// Export Router
//////////////////////////////

export default router;
