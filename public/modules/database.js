const fs = require("fs/promises")
const path = require("path")


module.exports = class Database{
    constructor(){
    this.filePath = path.join(__dirname,"..","database.json");
        this.data=[];
        this.readFile();
}

async readFile(){
    
    let  data = await fs.readFile(this.filePath,"utf-8");

    data =await JSON.parse(data);
    console.log(data);

}
}