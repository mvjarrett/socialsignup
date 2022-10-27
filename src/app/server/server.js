// const express = require('express')
// const bodyParser = require('body-parser');

// const app = express()
// app.use(bodyParser.urlencoded({ extended: true }));
// const port = 3000
// const decode = require('jwt-decode')


// app.post('/main', (req, res) => {
  
//  var jwt = req.body.credential
//   var decoded = decode(jwt)
//   console.log('reg: ', decoded)
//   var decodedHeader = decode(jwt, { header: true })
//   console.log('decoded @Header: ', decodedHeader)

//   res.json(decoded);
//  } )

// //  app.post('/main', (req, res) => {
// //   console.log('Got body:', req.body);
// //   res.sendStatus(200);
// // });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })