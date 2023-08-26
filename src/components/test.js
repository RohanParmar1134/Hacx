const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
// const {pdfSchema} = require("./pdfSchema")

const app = express();
const upload = multer();
// const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pdfSchema = new Schema({
  name: String,
  data: Buffer,
  contentType: String
});

mongoose.connect('mongodb+srv://rp331563:Rohan1134@ljinsider.ril4fay.mongodb.net/', { useNewUrlParser: true });

app.post('/register', upload.single('pdf'), (req, res) => {
  const newPdf = new pdfSchema({
    name: req.file.originalname,
    data: req.file.buffer,
    contentType: req.file.mimetype
  });

  newPdf.save((err, pdf) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    res.send(`File uploaded successfully! ID: ${pdf._id}`);
  });
});

app.listen(8000, () => console.log('Server started on port 9000'));