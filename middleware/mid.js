import dotenv from "dotenv"
import express from "express"
import morgan from "morgan"
import cors from "cors"
import methodOverride from "method-override"
dotenv.config()


const context = (req, res, next) => {
    req.context = {SECRET: process.env.SECRET}
    next()
}

export default function (app) {

    app.use(cors()) // cors headers
    app.use(context)
    app.use(methodOverride("_method")) // allows to override method using a _method=put query
    app.use(express.static("public")) // serve static files from the public folder
    app.use(express.json()) // parses application/json Content-Type header as req.body
    app.use(express.urlencoded({extended: true})) // parses application/x-www-form-urlencoded
    app.use(morgan("tiny")) // logging middleware

}