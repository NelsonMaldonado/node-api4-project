require("dotenv").config()
const path = require("path")

const express = require("express")
const { append } = require("express/lib/response")
const server = express()
const port = process.env.PORT || 9000

server.use(express.json())

server.get("/", (req, res) => {
  res.send("Default endpoint is working")
})

server.listen(port, () => {
  console.log(`/n****Listening on port: ${port}****n/`)
})
