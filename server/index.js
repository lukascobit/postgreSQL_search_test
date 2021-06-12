const express = require("express");
const app = express();
const cors = require('cors');
const pool = require("./db")

//middleware
app.use(cors);

//routes
app.get("/users", async(req,res)=>{
    try {
        const {name} = req.query;
        const users = await pool.query(`SELECT * FROM users WHERE first_name || ' ' || last_name ILIKE %${name}% `);
        res.json(users.rows);
        console.log(users.rows);
    } catch (error) {
        console.log(error);
    }
})


app.listen(3000, ()=>{
    console.log("listening on 3000");
})