const express = require('express')
const server = express()

const port = 8080

let counter = 0
const getRequest = (request, response) => {
  counter++
  response.send(counter + "")
}

server.get('/', getRequest)

server.post("/", (req, res)=> {
  console.log(req.body)
})
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})