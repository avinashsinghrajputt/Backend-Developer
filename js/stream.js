// var fs = require("fs");
// var data = '';
// var readerStream = fs.createReadStream("file.txt");
// readerStream.on('data', function(chunk){
//     data += chunk;
// });

// readerStream.on('end', function(){
//     console.log(data);
// });

// readerStream.on('error', function(err){
//     console.log(err.stack);
// });

// console.log("Program Ended");




//Writing to a stream
var fs = require('fs');
var data = 'Simply Easy Learning';
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data, 'utf8');
writerStream.end();
writerStream.on('finish', function(){
    console.log("Write completed using writerStream");
});

writerStream.on('err', function(err){
    console.log(err.stack);
})
console.log("Program Ended"); 


