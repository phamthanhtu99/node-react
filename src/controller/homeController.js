
import mysql from'mysql2';

//create the connect to database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123123',
    database:'jwt'
});

const handlerHelloWord =(req,res)=>{
    return res.send("Hello word controller");
}

const handlerViewHelloWord =(req,res)=>{
    const name = "Tu"
    return res.render("home.ejs",{name});
}

const handlerViewUser =(req,res)=>{
    return res.render("user.ejs");
}

const handlerCreateNewUser =(req,res)=>{
    const {email,username,password} = req.body;
    console.log(">>>> ",email,username,password);

    conn.query(
        'INSERT INTO users (email, password, username) VALUES (?, ?, ?)',[email,username,password]
        , (err,resutls,fields)=>{
            if (err) {
                console.log(err);  
            }
                console.log(resutls);
        }
    )

    return res.send("handlerCreateNewUser");
}
module.exports = {
    handlerHelloWord,
    handlerViewHelloWord,
    handlerViewUser,
    handlerCreateNewUser
    
}