const express = require('express');
const path = require('path');
const fs = require('fs');


const PORT = process.env.PORT || 3001;


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));
// notes page
app.get('/notes',(req, res)=>{
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes',(req, res)=>{
 res.sendFile(path.join__dirname, '../db/db.json');
});

app.post('/api/notes',(req, res)=>{
  console.log(req.body)
  let db = fs.readFileSync('db/db.json');
  db = JSON.parse(db);
  req.json(db);
})

app.get('*',(req, res)=>{
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`)
);
//read push addto file