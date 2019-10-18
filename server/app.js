const express = require('express')

const mysql = require('mysql')


const cors = require('cors')

let pool = mysql.createPool({
  host:"127.0.0.1",
  port:3306,
  user:'root',
  password:'',
  database:'xz',
  connectionLimit:20
})

let app = express();


app.use(cors({
  origin:['http://127.0.0.1:8080','http://localhost:8080'],
  credentials:true
}))

app.listen(3000,()=>{
  console.log('listen 3000 port')
})


app.get('/',(req,res)=>{
  let pno = parseInt(req.query.pno) || 1;
  let offset = 2;
  let sql = "select * from xz_laptop limit ?,?";
  pool.query(sql,[pno,offset],(err,result)=>{
    if(err) throw err;
    if(result.length>0) res.send(result);
  })
})


