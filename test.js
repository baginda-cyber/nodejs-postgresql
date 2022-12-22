const PORT = process.env.PORT || 8888
const { Client } = require('pg','express');
const client = new Client({
  user: 'cbr',
  host: '192.168.122.169',
  database: 'tet',
  password: 'cbr250rr',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Hello From DevOps");
});
