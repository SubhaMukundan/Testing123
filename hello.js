const express = require('express')
const hello = express()

hello.get('/', function (req, res) {
  res.send('Hello World!')
})


hello.listen(3000, function () {
  console.log('Example hello listening on port 3000!')
})
