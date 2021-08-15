const fs = require("fs/promises")
const express = require("express")
const database = require("./modules/database.js")


const db = new database()
const app = express()


app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json())

app.use(express.static("public"));

app.get("/", async (req, res) => {
    let response = await fs.readFile("index.html",
        "utf-8")
    res.send(response)

})
app.get("/home", async (req, res) => {

    // let x= await db.addData("uygon","ds","ds","ds","sdsd","dsd","5s");
    // console.log(x)
    let data = await db.readFile();
    // console.log(data)
    res.json({
        data: data,
    })
});


app.post("/add_todo", async (req, res) => {
    // console.log(req.body)
    const added_todo = await db.addData(req.body.name, req.body.number, req.body.kurs, req.body.kursTuri,req.body.ishJoyi,req.body.darsVaqti,req.body.kelishManbasi)
res.json(added_todo)
})


app.listen(3030, () => {
    console.log("App running at 5005")
    db.readFile()
})