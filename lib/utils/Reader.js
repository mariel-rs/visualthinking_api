const fs = require("fs");

class Reader{

    static readJsonFile(path){
        
        const jsonDecode = JSON.parse(fs.readFileSync(path));

        return jsonDecode;
    }
}

module.exports = Reader;