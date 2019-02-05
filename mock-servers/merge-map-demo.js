const PORT = 4001;
const HOST = '127.0.0.1';

var express = require('express');
var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json()); // to support JSON-encoded bodies

let counter = 0;
let responseReady = {};

/* Main routes */
app.get('/merge-map-demo/request-data', function (req, res) {

  const requestAnswer = {
    dataId: counter++
  };

  console.log('requestAnswer.dataId: ' + requestAnswer.dataId)
  // after 3 seconds, set the item to true in the responseReady array
  setTimeout(() => {
    responseReady[requestAnswer.dataId] = true;
  }, 3000);

  res.status(200).send(requestAnswer);
});

app.get('/merge-map-demo/get-response', function (req, res) {

  const dataId = req.query.dataId;
  const notReadyAnswer = {
    ready: false
  };
  const readyAnswer = {
    data: [1, 2, 3, 4, 5],
    ready: true
  };

  console.log('responseReady[dataId]: ' + responseReady[dataId]);
  if (!responseReady[dataId]) {
    console.log('Not ready...');
    res.status(200).send(notReadyAnswer);
  } else {
    console.log('Ready!');
    res.status(200).send(readyAnswer);
  }
});

app.listen(PORT, function () {
  console.log('Mock back-end is listening on port ' + PORT + '...');
});
