/////////////////////////////////
// Setup - Import deps and create app object
////////////////////////////////
import dotenv from "dotenv"
dotenv.config()
import express from "express"
const WebServer = express()
import morgan from "morgan"

////////////////////////////////////////////
// Declare Middleware
///////////////////////////////////////////
WebServer.use(express.static("public"))
WebServer.use(morgan("tiny"))



///////////////////////////////////////////
// Declare Routes and Routers
//////////////////////////////////////////
// get route to /cheese
WebServer.get("/cheese", (req, res) => {
    res.send(process.env.CHEESE)
})

WebServer.get("/render/:variable", (req, res) => {
    res.render("render.ejs", {v: req.params.variable, q: req.query})
})

// // CATCH ALL ROUTE
// WebServer.all("*", (req, res) => {

//     res.json({
//         headers: req.headers,
//         url: req.url,
//         host: req.hostname,
//         method: req.method
//     })

// })

////////////////////////////////////////
// Server Listener
///////////////////////////////////////


WebServer.listen(7777, () => console.log("Web Server is Listening on Port 7777"))