const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db')

const app = express();

app.use(bodyParser.json())

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Expossed!')
})

app.post('/users', (req, res) => {
  try{
    const {name, email} = req.body;
    console.log("name", name)
    const query = 'INSERT INTO user (name, email) VALUES(?,?)';
    db.query(query, [name, email], (err, result) => {
      console.log("Hello")
      if(err){
        console.error("Error while creating User ", err);
        res.status(500).send('Interval server error');
        return;
      }
      res.status(201).json({ id: result.insertId, name, email });
  
    })
  } catch(e) {
    console.log("eror",e)
    res.status(500).send('Internal Server Error!')
  }
})


app.listen(PORT, ()=> {
  console.log(`server is running http://localhost:${PORT}`)
})