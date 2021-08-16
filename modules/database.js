const fs = require("fs/promises")
const path = require("path")

module.exports = class Database {
    constructor() {
        this.filePath = path.join(__dirname, "..", "database.json")
        this.data = [];
        this.readFile()
    }

    async readFile() {
        let data = await fs.readFile(this.filePath, "utf-8")
        data = await JSON.parse(data)
        // console.log(data)
        this.data = data.data;
        return data.data;
        
}
async addData(id,name,number, kurs,kursTuri,ishJoyi, darsVaqti,kelishManbasi){
    const data = {
        id:(this.data.length-1)+1,
        name:name,
        number:number,
        kurs:kurs,
        kursTuri:kursTuri,
        ishJoyi:ishJoyi,
        darsVaqti:darsVaqti,
        kelishManbasi:kelishManbasi,
        isDone:false,
    }
    this.data.push(data);
    await fs.writeFile(this.filePath, JSON.stringify({
        data:this.data,
    }));
    return data;
}

    async deleteTodo(id){
        let data = await this.readFile()
        let filtered
    }



}
