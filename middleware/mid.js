import express from "express"
import morgan from "morgan"
import cors from "cors"

export default function (app) {

    app.use(cors()) // cors headers
    app.use(express.static("public")) // serve static files from the public folder
    app.use(express.json()) // parses application/json Content-Type header as req.body
    app.use(express.urlencoded({extended: true})) // parses application/x-www-form-urlencoded
    app.use(morgan("tiny")) // logging middleware

}