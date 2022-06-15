//set enviroment about database


const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());//อนุญาติและไม่อนุญาติการร้องขอการเข้าถึงทรัพยากรอื่น
app.use(express.json());


//create database connection employee table 
const employee = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"songkeit20839",
    database:'employeesystem'
})
app.get('/employee' ,(req,res) =>{
    employee.query("SELECT * FROM employee",(err,result) => {
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
    employee.query("UPDATE employee SET name = ?, age = ?, country = ?, position = ?, wage = ?  WHERE id = ?",[name,age,country,position,wage,id],//fixable follow column
    (err,result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})




//--------------------------------------------------------------------------------------------------------------------
//create database connection employee_temp table 
const employee_temp = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"songkeit20839",
    database:'employeesystem'
})

app.get('/employee_temp' ,(req,res) =>{
    employee_temp.query("SELECT * FROM employee_temp",(err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    });
});
app.put('/update_temp',(req,res) =>{
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;
    employee_temp.query("UPDATE employee_temp SET name = ?, age = ?, country = ?, position = ?, wage = ?  WHERE id = ?",[name,age,country,position,wage,id],//fixable follow column
    (err,result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})

app.get('/employee_temp_check_country' ,(req,res) =>{
    employee_temp.query("SELECT * FROM employee_temp a LEFT join country on a.country = country.country WHERE country.country IS NULL",(err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    });
});


// set port
app.listen('3001', () => {
    console.log('server running on port 3001')
})