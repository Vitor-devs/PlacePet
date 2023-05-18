const express = require('express')
const cors = require('cors'); // usado para rodar o node em uma porta (8000) e o angular em outra (4200)
const bodyParser = require('body-parser')
const http = require('http')
const mysql = require('mysql')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: "adocao"
})

app.get('/infoPegar',(req, res)=>{
    res.send('Olá mundo')
})
// http://localhost:8000/infoPegar


app.listen(8000, ()=>{console.log("rodando na porta 8000")})