import express from 'express';
const app = express()

import minimist from "minimist";

const options = {
    alias: {
      p: 'PORT',
      m: 'MODO'
    }
  }
  
const myArgs = minimist(process.argv.slice(2), options)

const PORT = myArgs.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Server http listening in port ${server.address().port}`)
})
server.on("error", error => console.log(`Error in server ${error}`));


app.get('/', (req, res) => {
    res.json({puerto: PORT})
})