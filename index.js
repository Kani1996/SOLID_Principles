var express = require('express');
var app = express();
var tender = require('./Models/Tender/tender');
var createTender = require('./Models/Tender/createTender');
const CreateTender = require('./Models/Tender/createTender');

app.get('/', function (req, res) {
   res.send('Hello World');
})
app.get('/tender', function(req, res){
   var details = { tenerName: 'Test', tenderType: 'single' , bidSubmissionDate: '22/10/2019' }
   var tenderObj = new tender(details);
   res.send(tenderObj);
   var create = new CreateTender();
   console.log(create.insertTender(details));
})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})