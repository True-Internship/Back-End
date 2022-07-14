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
    employee.query("SELECT * FROM vwemployee_cp_new", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    });
});
app.put('/update', (req, res) => {
    const companygroup = req.body.companygroup;
    const companyname = req.body.companyname;
    const empid = req.body.empid;
    const identification = req.body.identification;
    const b_dd = req.body.b_dd;
    const b_mm = req.body.b_mm;
    const b_yyyy = req.body.b_yyyy;
    const salutation_thai = req.body.salutation_thai;
    const thai_firstname = req.body.thai_firstname;
    const thai_lastname = req.body.thai_lastname;
    const Thai_Fullname = req.body.Thai_Fullname;
    const salutation_eng = req.body.salutation_eng;
    const eng_firstname = req.body.eng_firstname;
    const eng_lastname = req.body.eng_lastname;
    const position = req.body.position;
    const email = req.body.email;
    const positioncode = req.body.positioncode;
    const phone_No = req.body.phone_No;
    const province = req.body.province;
    const worksite = req.body.worksite;
    const employment_Type = req.body.employment_Type;
    const worktype = req.body.worktype;
    const Report = req.body.Report;
    const SalLessThan15k = req.body.SalLessThan15k;
    const joindate = req.body.joindate;
    const business_SIM = req.body.business_SIM;
    const Nation = req.body.Nation;
    const vip = req.body.vip;
    const ConsentDM = req.body.ConsentDM;
    employee.query("UPDATE vwemployee_cp_new SET companygroup = ?,companyname = ?,empid = ?,identification = ?,b_dd = ?,b_mm = ?,b_yyyy = ?,salutation_thai = ?,thai_firstname = ?,thai_lastname = ?,Thai_Fullname = ?,salutation_eng = ?,eng_firstname = ?,eng_lastname = ?,position = ?,email = ?,positioncode = ?,phone_No = ?,province = ?,worksite = ?,employment_Type = ?,worktype = ?,Report = ?,SalLessThan15k = ?,joindate = ?,business_SIM = ?,Nation = ?,vip = ?,ConsentDM = ? where companygroup = ? AND companyname = ?",
        [
            companygroup,
            companyname,
            empid,
            identification,
            b_dd,
            b_mm,
            b_yyyy,
            salutation_thai,
            thai_firstname,
            thai_lastname,
            Thai_Fullname,
            salutation_eng,
            eng_firstname,
            eng_lastname,
            position,
            email,
            positioncode,
            phone_No,
            province,
            worksite,
            employment_Type,
            worktype,
            Report,
            SalLessThan15k,
            joindate,
            business_SIM,
            Nation,
            vip,
            ConsentDM,
            companygroup,
            companyname,
        ],//fixable follow column
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
    const companygroup = req.body.companygroup
    const companyname = req.body.companyname;
    const empid = req.body.empid;
    const identification = req.body.identification;
    const b_dd = req.body.b_dd;
    const b_mm = req.body.b_mm;
    const b_yyyy = req.body.b_yyyy;
    const salutation_thai = req.body.salutation_thai;
    const thai_firstname = req.body.thai_firstname;
    const thai_lastname = req.body.thai_lastname;
    const Thai_Fullname = req.body.Thai_Fullname;
    const salutation_eng = req.body.salutation_eng;
    const eng_firstname = req.body.eng_firstname;
    const eng_lastname = req.body.eng_lastname;
    const position = req.body.position;
    const email = req.body.email;
    const positioncode = req.body.positioncode;
    const phone_No = req.body.phone_No;
    const province = req.body.province;
    const worksite = req.body.worksite;
    const employment_Type = req.body.employment_Type;
    const worktype = req.body.worktype;
    const Report = req.body.Report;
    const SalLessThan15k = req.body.SalLessThan15k;
    const joindate = req.body.joindate;
    const business_SIM = req.body.business_SIM;
    const Nation = req.body.Nation;
    const vip = req.body.vip;
    const ConsentDM = req.body.ConsentDM;

    employee_temp.query("INSERT INTO employee_temp (companygroup ,companyname ,empid ,identification ,b_dd ,b_mm ,b_yyyy ,salutation_thai ,thai_firstname ,thai_lastname ,Thai_Fullname ,salutation_eng ,eng_firstname ,eng_lastname ,position ,email ,positioncode ,phone_No ,province ,worksite ,employment_Type, worktype ,Report ,SalLessThan15k ,joindate ,business_SIM ,Nation ,vip ,ConsentDM ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
            companygroup,
            companyname,
            empid,
            identification,
            b_dd,
            b_mm,
            b_yyyy,
            salutation_thai,
            thai_firstname,
            thai_lastname,
            Thai_Fullname,
            salutation_eng,
            eng_firstname,
            eng_lastname,
            position,
            email,
            positioncode,
            phone_No,
            province,
            worksite,
            employment_Type,
            worktype,
            Report,
            SalLessThan15k,
            joindate,
            business_SIM,
            Nation,
            vip,
            ConsentDM,
        ],//fixable follow column
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });


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
    employee_temp.query(`
        SELECT * FROM employee_temp a 
        LEFT join ww_employment_type on a.employment_Type = ww_employment_type.employment_Type 
        LEFT JOIN ww_nation on a.Nation = ww_nation.nation
        LEFT JOIN ww_province on a.province = ww_province.province
        LEFT JOIN ww_worktype on a.worktype = ww_worktype.worktype
        WHERE 
        ww_employment_type.employment_Type IS NULL OR
        ww_nation.nation IS NULL OR
        ww_province.province IS NULL OR
        ww_worktype.worktype IS NULL

    `, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    });
});

app.post('/check_composite_code', (req, res) => {
    const GroupCode = req.body.GroupCode
    const CompanyCode = req.body.CompanyCode
    employee_temp.query("SELECT * FROM ww_companycode WHERE GroupCode = ? AND CompanyCode = ?",
        [GroupCode, CompanyCode],
        (err, result) => {
            if (err) {
                res.send({ err: err })
            }

            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "company code and group code is don't match." });
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