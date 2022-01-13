const express = require("express")
const server = express()
const port = process.env.PORT || 9000

server.get("/", (req, res) => {
  res.send("Default endpoint is working")
})

server.listen(port, () => {
  console.log(`/n****Listening on port: ${port}****n/`)
})
