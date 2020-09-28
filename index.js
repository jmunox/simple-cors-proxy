const express = require('express')
const fetch = require('node-fetch')
const { query, validationResult } = require('express-validator');
var cors = require('cors')
const proxy = express()
const port = 4321

proxy.use(cors())

proxy.get('/', [
  // req.query.url validation
  query('url')
  .notEmpty().isURL()
], (req, res) => {
  //wrong request
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send(
      '<h2> Wrong request </h2> '
      + JSON.stringify({ errors: errors.array() })
      + '<p>Try for example: <a href="/?url=https://github.com/jmunox/simple-cors-proxy">http://localhost:'+port+'/?url=https://github.com/jmunox/simple-cors-proxy</a></p>'
      ).end() 
  }
    // no validation errors in req.query.url
    (async () => {
      const response = await fetch(req.query.url);
      const body = await response.text();
      console.log(req.query);
      res.send(body)
      })();
    
})

proxy.listen(port, () => {
  console.log(`CORS proxy server listening at http://localhost:${port}`)
})