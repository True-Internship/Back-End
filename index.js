const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());//อนุญาติและไม่อนุญาติการร้องขอการเข้าถึงทรัพยากรอื่น
app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"songkeit20839",
    database:'employeesystem'
})
app.get('/employee' ,(req,res) =>{
    db.query("SELECT * FROM employee",(err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    });
});

app.put('/update',(req,res) =>{
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query("UPDATE employee SET name = ?, age = ?, country = ?, position = ?, wage = ?  WHERE id = ?",[name,age,country,position,wage,id],//fixable follow column
    (err,result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})
// set port
app.listen('3001', () => {
    console.log('server running on port 3001')
})