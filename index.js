var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

let multer = require("multer");
var upload = multer({ dest: 'uploads/' });

app.post('/api/fileanalyse', upload.single('upfile'),(req,res)=>{
  let resObj={};
  resObj["name"]=req.file.originalname;
  resObj["type"]=req.file.mimetype;
  resObj["size"]=req.file.size;
  res.json(resObj);
});