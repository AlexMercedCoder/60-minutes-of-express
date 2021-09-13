/////////////////////////////////
// Setup - Import deps and create app object
////////////////////////////////
import dotenv from "dotenv"
import express from "express"
import middleware from "./middleware/mid.js"
import MainRouter from "./controllers/mainrouter.js"
import PigsRouter from "./controllers/pigs.js"

dotenv.config()
const WebServer = express()

////////////////////////////////////////////
// Declare Middleware
///////////////////////////////////////////
middleware(WebServer)

///////////////////////////////////////////
// Declare Routes and Routers
//////////////////////////////////////////
WebServer.use("/pigs", PigsRouter)
WebServer.use("/", MainRouter) // main router

////////////////////////////////////////
// Server Listener
///////////////////////////////////////

WebServer.listen(7777, () => console.log("Web Server is Listening on Port 7777"))