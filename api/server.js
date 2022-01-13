require("dotenv").config

const express = require("express")
const server = express()
const port = process.env.PORT || 9000
server.use(express.json())

server.get("/", (req, res) => {
  res.send("<h1>Default endpoint is working</h1><h3>body info</h3> ")
})

module.exports = server
