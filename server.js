const fs = require("fs/promises")
const express = require("express")
const database = require("../administration_crm/public/modules/database.js")


const db = new database()
const app = express()

app.use(express.static(__dirname + "/public"));

app.get("/", async(req,res) =>{
    let response = await fs.readFile(__dirname +"/views/index.html",
     "utf-8")
     res.send(response)

})

app.listen(3303,() =>{
    console.log("App running at 5005")
    db.readFile()
})
