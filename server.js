const express = require("express")
const path = require("path")

const app = express()
app.use(express.static('static'))

app.get("/", (req,res)=>{
    const file = path.join(__dirname,"/Templates/index.html")
    res.sendFile(file)
})

app.get("/hakkimizda", (req,res)=>{
    const file = path.join(__dirname,"/Templates/hakkimizda.html")
    res.sendFile(file)
})

app.get("/iletisim", (req,res)=>{
    const file = path.join(__dirname,"/Templates/iletisim.html")
    res.sendFile(file)
})

app.get("/hizmetlerimiz", (req,res)=>{
    const file = path.join(__dirname,"/Templates/hizmetlerimiz.html")
    res.sendFile(file)
})

app.listen(4000, ()=>{
    console.log("Port 4000 On")
})