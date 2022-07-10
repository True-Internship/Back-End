//set enviroment about database
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());//อนุญาติและไม่อนุญาติการร้องขอการเข้าถึงทรัพยากรอื่น
app.use(express.json());


//create database connection employee table 
const employee = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "songkeit20839",
    database: 'employeesystem'
})
app.get('/employee', (req, res) => {
    employee.query("SELECT * FROM employee", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    });
});
app.put('/update', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;
    employee.query("UPDATE employee SET name = ?, age = ?, country = ?, position = ?, wage = ?  WHERE id = ?", [name, age, country, position, wage, id],//fixable follow column
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
})




//--------------------------------------------------------------------------------------------------------------------
//create database connection employee_temp table 
const employee_temp = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "songkeit20839",
    database: 'employeesystem'
})

app.get('/employee_temp', (req, res) => {
    employee_temp.query("SELECT * FROM employee_temp", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    });
});
app.post('/update_temp', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;
    try {
        employee_temp.query("INSERT INTO employee_temp (id, name , age, country , position , wage) VALUES(?,?,?,?,?,?)", [id, name, age, country, position, wage],//fixable follow column
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(result);
                }
            });
    } catch (error) {
    }

})

app.delete('/delete', (req, res) => {
    employee_temp.query("DELETE FROM employee_temp", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
})


app.get('/employee_temp_check_country', (req, res) => {
    employee_temp.query("SELECT * FROM employee_temp a LEFT join position on a.position = position.position LEFT JOIN country on a.country = country.country WHERE position.position IS NULL OR country.country IS NULL", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    });
});








//-------------Login Excel upload-----------------------
const login_DB = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "songkeit20839",
    database: 'employeesystem'
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    login_DB.query("SELECT * FROM loginexcelupload WHERE UserName = ? AND UserPassword = ?",
        [username, password],
        (err, result) => {
            if (err) {
                res.send({ err: err })
            }

            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "username and password don't match." });
            }


        });
});
// set port
app.listen('3001', () => {
    console.log('server running on port 3001')
})