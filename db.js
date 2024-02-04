const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'chatboot',
  password: 'usa@@12Usa',
  database: 'chatboot',
})


connection.connect((err)=>{
  if(err){
    console.log("Error connection mysql", err)
  }
  console.log("Connect with mysql successfully.")
})

module.exports = connection