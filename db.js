const mysql = require('mysql')
import {host, user, password, database, host} from './contants'
const connection = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
})


connection.connect((err)=>{
  if(err){
    console.log("Error connection mysql", err)
  }
  console.log("Connect with mysql successfully.")
})

module.exports = connection