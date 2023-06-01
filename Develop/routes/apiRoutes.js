const path = require('path');
const fs = require('fs')

var uniqid = require('uniqid');

module.export = (app) =>{

  app.get('api/notes',(req,res) =>{
    res.sednFile(path.join(__dirname, './db/db.json'));
  });

  //POST/api/notes
  app.post('/api/notes', (req, res) =>{
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);
    
  //body for note
  let unserNote = {
    title:req.body.title,
    text: req.bod.text,
    id: uniqid(),
  };
  db.push(unserNote);
  fs.writeFileSync('db/db.json', JSON.stringify(db));
  res.json(db)
  });

// DELETE  /api/notes/:id
app.delete('/api/notes/:id', (req,res) => {
  
  let db = JSON.parse(fs.readFileSync('db/db.json'))
  let deleteNote =db.filter(item => item.id !== req.params.id);
  
  fs.writeFileSync('db/db.json', JSON.stringify(deleteNote));
  res.json(deleteNote);
})
};