const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const app = express()
const router = require('../routes/homework')


app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/v1', router)

if (process.env.NODE_ENV != "test") {app.listen(port, () => {
  console.log('App Listening on http://localhost:3000')
})}

module.exports = app;