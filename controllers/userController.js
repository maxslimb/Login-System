const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const dbConnection = require("../utils/dbConnection");

// Home Page
exports.homePage = async (req, res, next) => {
    const [row] = await dbConnection.execute("SELECT * FROM `students` WHERE `id`=?", [req.session.userID]);

    if (row.length !== 1) {
        return res.redirect('/logout');
    }

    res.render('home', {
        user: row[0],
        std: row[0].standard
    });
}

// Register Page
exports.registerPage = (req, res, next) => {
    res.render("register");
};

// User Registration
exports.register = async (req, res, next) => {
    const errors = validationResult(req);
    const { body } = req;
    if((body._remark1 == undefined)&&errors.isEmpty()&&body.Standard!="1st Standard"){
        console.log("got in")
        console.log(body.Standard)
        res.render("register", {
                msg: 'std got',
                name: body._name,
                email: body._email,
                pass: body._password,
                rollno: body._roll,
                std: body.Standard
            });
    }
    if (!errors.isEmpty()) {
        return res.render('register', {
            error: errors.array()[0].msg
        });
    }
    if(typeof body._remark1 == 'undefined'||typeof body._per1 == 'undefined'||
     body._remark2 == ''|| body._per2 == ''||
     body._remark3 == ''|| body._per3 == ''||
     body._remark4 == ''|| body._per4 == ''||
     body._remark5 == ''|| body._per5 == ''||
     body._remark6 == ''|| body._per6 == ''||
     body._remark7 == ''|| body._per7 == ''||
     body._remark8 == ''|| body._per8 == ''||
     body._remark9 == ''|| body._per9 == ''

    ){

    }
    if(typeof body._remark1 != 'undefined'||body.Standard=="1st Standard"){
        console.log("std:",body.Standard[0])
        console.log("remark1:",body._remark1)
        console.log("per1:",body._per1)
        try {

            const [row] = await dbConnection.execute(
                "SELECT * FROM `students` WHERE `email`=?",
                [body._email]
            );
    
            if (row.length >= 1) {
                return res.render('register', {
                    error: 'This email already in use.'
                });
            }
    
            const hashPass = await bcrypt.hash(body._password, 12);
            if(body.Standard[0]==1&&body.Standard[1]!=0){
                
                console.log("std 1 gi")
                const [rows] = await dbConnection.execute(
                    "INSERT INTO `students` (`rollno`,`name`,`email`,`password`,`standard`) VALUES(?,?,?,?,?)",
                    [body._roll,body._name, body._email, hashPass,body.Standard]
                );
                if (rows.affectedRows !== 1) {
                    return res.render('register', {
                        error: 'Your registration has failed.'
                    });
                }
                
                res.render("register", {
                    msg: 'You have successfully registered.'
            
                    
                });
            }
            if(body.Standard[0]==2){
                if(body._remark1 == ''||body._per1 == ''){
                    return res.render('register', {
                        error: 'Please fill all the details',
                        msg: 'std got',
                        name: body._name,
                        email: body._email,
                        pass: body._password,
                        rollno: body._roll,
                        std: body.Standard
                    });
                }
                const [rows] = await dbConnection.execute(
                    "INSERT INTO `students`(`rollno`,`name`,`email`,`password`,`standard`,`standard_1_remark`,`standard_1_per`) VALUES(?,?,?,?,?,?,?)",
                    [body._roll,body._name, body._email, hashPass,body.Standard,body._remark1,body._per1]
                );
                if (rows.affectedRows !== 1) {
                    return res.render('register', {
                        error: 'Your registration has failed.'
                    });
                }
                res.render("register", {
                    msg: 'You have successfully registered.'
                });
            }
            if(body.Standard[0]==3){
                if(body._remark1 == ''||body._per1 == ''||body._remark2 == ''|| body._per2 == ''){
                    return res.render('register', {
                        error: 'Please fill all the details',
                        msg: 'std got',
                        name: body._name,
                        email: body._email,
                        pass: body._password,
                        rollno: body._roll,
                        std: body.Standard
                    });
                }
                const [rows] = await dbConnection.execute(
                    "INSERT INTO `students`(`rollno`,`name`,`email`,`password`,`standard`,`standard_1_remark`,`standard_1_per`,`standard_2_remark`,`standard_2_per`) VALUES(?,?,?,?,?,?,?,?,?)",
                    [body._roll,body._name, body._email, hashPass,body.Standard,body._remark1,body._per1,body._remark2,body._per2]
                );
                if (rows.affectedRows !== 1) {
                    return res.render('register', {
                        error: 'Your registration has failed.'
                    });
                }
                res.render("register", {
                    msg: 'You have successfully registered.'
                });
            }
            if(body.Standard[0]==4){
                if(body._remark1 == ''||body._per1 == ''||body._remark2 == ''|| body._per2 == ''||body._remark3 == ''|| body._per3 == ''){
                    return res.render('register', {
                        error: 'Please fill all the details',
                        msg: 'std got',
                        name: body._name,
                        email: body._email,
                        pass: body._password,
                        rollno: body._roll,
                        std: body.Standard
                    });
                }
                const [rows] = await dbConnection.execute(
                    "INSERT INTO `students`(`rollno`,`name`,`email`,`password`,`standard`,`standard_1_remark`,`standard_1_per`,`standard_2_remark`,`standard_2_per`,`standard_3_remark`,`standard_3_per`) VALUES(?,?,?,?,?,?,?,?,?,?,?)",
                    [body._roll,body._name, body._email, hashPass,body.Standard,body._remark1,body._per1,body._remark2,body._per2,body._remark3,body._per3]
                );
                if (rows.affectedRows !== 1) {
                    return res.render('register', {
                        error: 'Your registration has failed.'
                    });
                }
                res.render("register", {
                    msg: 'You have successfully registered.'
                });
            }
            if(body.Standard[0]==5){
                if(body._remark1 == ''||body._per1 == ''||body._remark2 == ''|| body._per2 == ''||body._remark3 == ''|| body._per3 == ''||body._remark4 == ''|| body._per4 == ''){
                    return res.render('register', {
                        error: 'Please fill all the details',
                        msg: 'std got',
                        name: body._name,
                        email: body._email,
                        pass: body._password,
                        rollno: body._roll,
                        std: body.Standard
                    });
                }
                const [rows] = await dbConnection.execute(
                    "INSERT INTO `students`(`rollno`,`name`,`email`,`password`,`standard`,`standard_1_remark`,`standard_1_per`,`standard_2_remark`,`standard_2_per`,`standard_3_remark`,`standard_3_per`,`standard_4_remark`,`standard_4_per`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    [body._roll,body._name, body._email, hashPass,body.Standard,body._remark1,body._per1,body._remark2,body._per2,body._remark3,body._per3,body._remark4,body._per4]
                );
                if (rows.affectedRows !== 1) {
                    return res.render('register', {
                        error: 'Your registration has failed.'
                    });
                }
                res.render("register", {
                    msg: 'You have successfully registered.'
                });
            }
            if(body.Standard[0]==6){
                if(body._remark1 == ''||body._per1 == ''||body._remark2 == ''|| body._per2 == ''||body._remark3 == ''|| body._per3 == ''||body._remark4 == ''|| body._per4 == ''||body._remark5 == ''|| body._per5 == ''){
                    return res.render('register', {
                        error: 'Please fill all the details',
                        msg: 'std got',
                        name: body._name,
                        email: body._email,
                        pass: body._password,
                        rollno: body._roll,
                        std: body.Standard
                    });
                }
                const [rows] = await dbConnection.execute(
                    "INSERT INTO `students`(`rollno`,`name`,`email`,`password`,`standard`,`standard_1_remark`,`standard_1_per`,`standard_2_remark`,`standard_2_per`,`standard_3_remark`,`standard_3_per`,`standard_4_remark`,`standard_4_per`,`standard_5_remark`,`standard_5_per`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    [body._roll,body._name, body._email, hashPass,body.Standard,body._remark1,body._per1,body._remark2,body._per2,body._remark3,body._per3,body._remark4,body._per4,body._remark5,body._per5]
                );
                if (rows.affectedRows !== 1) {
                    return res.render('register', {
                        error: 'Your registration has failed.'
                    });
                }
                res.render("register", {
                    msg: 'You have successfully registered.'
                });
            }
            if(body.Standard[0]==7){
                if(body._remark1 == ''||body._per1 == ''||body._remark2 == ''|| body._per2 == ''||body._remark3 == ''|| body._per3 == ''||body._remark4 == ''|| body._per4 == ''||body._remark5 == ''|| body._per5 == ''||body._remark6 == ''|| body._per6 == ''){
                    return res.render('register', {
                        error: 'Please fill all the details',
                        msg: 'std got',
                        name: body._name,
                        email: body._email,
                        pass: body._password,
                        rollno: body._roll,
                        std: body.Standard
                    });
                }
                const [rows] = await dbConnection.execute(
                    "INSERT INTO `students`(`rollno`,`name`,`email`,`password`,`standard`,`standard_1_remark`,`standard_1_per`,`standard_2_remark`,`standard_2_per`,`standard_3_remark`,`standard_3_per`,`standard_4_remark`,`standard_4_per`,`standard_5_remark`,`standard_5_per`,`standard_6_remark`,`standard_6_per`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    [body._roll,body._name, body._email, hashPass,body.Standard,body._remark1,body._per1,body._remark2,body._per2,body._remark3,body._per3,body._remark4,body._per4,body._remark5,body._per5,body._remark6,body._per6]
                );
                if (rows.affectedRows !== 1) {
                    return res.render('register', {
                        error: 'Your registration has failed.'
                    });
                }
                res.render("register", {
                    msg: 'You have successfully registered.'
                });
            }
            if(body.Standard[0]==8){
                if(body._remark1 == ''||body._per1 == ''||body._remark2 == ''|| body._per2 == ''||body._remark3 == ''|| body._per3 == ''||body._remark4 == ''|| body._per4 == ''||body._remark5 == ''|| body._per5 == ''||body._remark6 == ''|| body._per6 == ''||body._remark7 == ''|| body._per7 == ''){
                    return res.render('register', {
                        error: 'Please fill all the details',
                        msg: 'std got',
                        name: body._name,
                        email: body._email,
                        pass: body._password,
                        rollno: body._roll,
                        std: body.Standard
                    });
                }
                const [rows] = await dbConnection.execute(
                    "INSERT INTO `students`(`rollno`,`name`,`email`,`password`,`standard`,`standard_1_remark`,`standard_1_per`,`standard_2_remark`,`standard_2_per`,`standard_3_remark`,`standard_3_per`,`standard_4_remark`,`standard_4_per`,`standard_5_remark`,`standard_5_per`,`standard_6_remark`,`standard_6_per`,`standard_7_remark`,`standard_7_per`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    [body._roll,body._name, body._email, hashPass,body.Standard,body._remark1,body._per1,body._remark2,body._per2,body._remark3,body._per3,body._remark4,body._per4,body._remark5,body._per5,body._remark6,body._per6,body._remark7,body._per7]
                );
                if (rows.affectedRows !== 1) {
                    return res.render('register', {
                        error: 'Your registration has failed.'
                    });
                }
                res.render("register", {
                    msg: 'You have successfully registered.'
                });
            }
            if(body.Standard[0]==9){
                if(body._remark1 == ''||body._per1 == ''||body._remark2 == ''|| body._per2 == ''||body._remark3 == ''|| body._per3 == ''||body._remark4 == ''|| body._per4 == ''||body._remark5 == ''|| body._per5 == ''||body._remark6 == ''|| body._per6 == ''||body._remark7 == ''|| body._per7 == ''||body._remark8 == ''|| body._per8 == ''){
                    return res.render('register', {
                        error: 'Please fill all the details',
                        msg: 'std got',
                        name: body._name,
                        email: body._email,
                        pass: body._password,
                        rollno: body._roll,
                        std: body.Standard
                    });
                }
                const [rows] = await dbConnection.execute(
                    "INSERT INTO `students`(`rollno`,`name`,`email`,`password`,`standard`,`standard_1_remark`,`standard_1_per`,`standard_2_remark`,`standard_2_per`,`standard_3_remark`,`standard_3_per`,`standard_4_remark`,`standard_4_per`,`standard_5_remark`,`standard_5_per`,`standard_6_remark`,`standard_6_per`,`standard_7_remark`,`standard_7_per`,`standard_8_remark`,`standard_8_per`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    [body._roll,body._name, body._email, hashPass,body.Standard,body._remark1,body._per1,body._remark2,body._per2,body._remark3,body._per3,body._remark4,body._per4,body._remark5,body._per5,body._remark6,body._per6,body._remark7,body._per7,body._remark8,body._per8]
                );
                if (rows.affectedRows !== 1) {
                    return res.render('register', {
                        error: 'Your registration has failed.'
                    });
                }
                res.render("register", {
                    msg: 'You have successfully registered.'
                });
            }
            if(body.Standard[0]==1&&body.Standard[1]==0){
                if(body._remark1 == ''||body._per1 == ''||body._remark2 == ''|| body._per2 == ''||body._remark3 == ''|| body._per3 == ''||body._remark4 == ''|| body._per4 == ''||body._remark5 == ''|| body._per5 == ''||body._remark6 == ''|| body._per6 == ''||body._remark7 == ''|| body._per7 == ''||body._remark8 == ''|| body._per8 == ''||body._remark9 == ''|| body._per9 == ''){
                    return res.render('register', {
                        error: 'Please fill all the details',
                        msg: 'std got',
                        name: body._name,
                        email: body._email,
                        pass: body._password,
                        rollno: body._roll,
                        std: body.Standard
                    });
                }
                const [rows] = await dbConnection.execute(
                    "INSERT INTO `students`(`rollno`,`name`,`email`,`password`,`standard`,`standard_1_remark`,`standard_1_per`,`standard_2_remark`,`standard_2_per`,`standard_3_remark`,`standard_3_per`,`standard_4_remark`,`standard_4_per`,`standard_5_remark`,`standard_5_per`,`standard_6_remark`,`standard_6_per`,`standard_7_remark`,`standard_7_per`,`standard_8_remark`,`standard_8_per`,`standard_9_remark`,`standard_9_per`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    [body._roll,body._name, body._email, hashPass,body.Standard,body._remark1,body._per1,body._remark2,body._per2,body._remark3,body._per3,body._remark4,body._per4,body._remark5,body._per5,body._remark6,body._per6,body._remark7,body._per7,body._remark8,body._per8,body._remark9,body._per9]
                );
                if (rows.affectedRows !== 1) {
                    return res.render('register', {
                        error: 'Your registration has failed.'
                    });
                }
                res.render("register", {
                    msg: 'You have successfully registered.'
                });
            }
            
        } catch (e) {
            next(e);
        }
    }
    
};

// Login Page
exports.loginPage = (req, res, next) => {
    res.render("login");
};

// Login User
exports.login = async (req, res, next) => {

    const errors = validationResult(req);
    const { body } = req;

    if (!errors.isEmpty()) {
        return res.render('login', {
            error: errors.array()[0].msg
        });
    }

    try {

        const [row] = await dbConnection.execute('SELECT * FROM `students` WHERE `email`=?', [body._email]);

        if (row.length != 1) {
            return res.render('login', {
                error: 'Invalid email address.'
            });
        }

        const checkPass = await bcrypt.compare(body._password, row[0].password);

        if (checkPass === true) {
            req.session.userID = row[0].id;
            return res.redirect('/');
        }

        res.render('login', {
            error: 'Invalid Password.'
        });


    }
    catch (e) {
        next(e);
    }

}
