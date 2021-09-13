//////////////////////////////
// Importing Deps
//////////////////////////////

import express from "express"
const router = express.Router()

//////////////////////////////
// Register Routes
//////////////////////////////

// get route to /cheese
router.get("/cheese", (req, res) => {
    res.send("gouda")
})

router.get("/render/:variable", (req, res) => {
    res.render("render.ejs", {v: req.params.variable, q: req.query})
})

// CATCH ALL ROUTE
router.all("*", (req, res) => {

    res.json({
        headers: req.headers,
        url: req.url,
        host: req.hostname,
        method: req.method,
        context: req.context
    })

})

//////////////////////////////
// Export Router
//////////////////////////////

export default router