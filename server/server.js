const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.jsons('Hello World')
})
 
app.listen(3000,()=>{
      console.log("Escuchando puerto: ",3000);
})