require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;
const { Client } = require('pg')
const client = new Client({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASENAME,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.PGPORT,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
app.listen(port, () => {
    // logger.info(`cli-nodejs-api listening at ${port}`);
    console.log(`cli-nodejs-api listening at ${port}`)
});
