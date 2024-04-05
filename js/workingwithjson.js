const fs = require('fs')
// read a json file
fs.readFile('prac.json', "utf8", (err, data) => {
    if (err) {
        console.error("file does not exist")
    } else {
        console.log(JSON.parse(data))  //we use JSON.parse for read it more comfortable
    }
}

)

//writing in the json file
const content =
{
    key7: "value",
    key8: 29
}
const convert = JSON.stringify(content, null, 2)
fs.appendFile("prac.json", convert, (err) => {
    if (err) {
        console.error("error is there")
    }
    else {
        console.log("file is updated")
    }
}
)