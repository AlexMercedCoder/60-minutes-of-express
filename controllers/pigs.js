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

// SHOW ROUTE - GETS US THE DATA ON ONE ITEM

// The template version - get request to /pigs/:id
router.get("/:id", (req, res) => {
    const pig = pigs[parseInt(req.params.id)] // turn string param into number, use as index for desired pig
    res.render("pigs/show.ejs", { pig });
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
