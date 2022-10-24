const express = require('express')
const mongoose = require('mongoose');
require("dotenv").config();
const app = express()
const port = 7000
const routerServer = require('./src/Routes/server')
const path = require("path")



//swagger
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PokeApi",
      version: "1.0.0"
    },
    servers: [
      {
        url: "http://localhost:7000",
      }
    ]
  },
  apis: [`${path.join(__dirname, "./src/Routes/*.js")}`]
}

//middleware
app.use(express.json());
app.use('/api', routerServer)
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))



app.get("/", (req, res)=>{
  res.send("Welcome to my API")
})


//MongoDb
mongoose.connect(process.env.DB_CNN)
  .then(() => { console.log('Conectado a MongoDB') })

// Escuchar peticiones
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})