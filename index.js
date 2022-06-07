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
    database:'employeeSystem'
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

app.post('/create',(req,res) =>{
    const name = req.body.name;

    db.query("INSERT INTO employee (name) VALUES(?)",
    [name],
    (err, result) =>{
        if (err){
            console.log(err)
        }else{
            res.send("Values insert")
        }
    }
    );
})

app.put('/update',(req,res) =>{
    const id = req.body.id;
    const name = req.body.name;
    db.query("UPDATE employee SET name = ? WHERE id = ?",[name,id],
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