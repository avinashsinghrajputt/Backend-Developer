// const express = require("express");
// const app = express();

// const myLogger = function(req, res, next){
//     console.log('LOGGED');
//     next();
// }
// app.use(myLogger);
// app.get('/', function(req, res){
//     res.send("hello world");
// })
// app.listen(8080);


// const express = require("express");
// const app = express();
// const requestTime = function(req, res, next){
//     req.requestTime = Date.now();
//     next()
// }

// app.use(requestTime)
// app.get('/', (req, res)=>{
//     let responseText = 'Hello World!<br>'
//     responseText += <small> Requested at: ${req.requestTime}</small>;
//     res.send(responseText);
// })

// app.listen(8080);           




// const express = require("express");
// const app = express();
// const PORT = 3000;
// app.use(function(req, res, next){
//     console.log("Middleware called");
//     next();
// });

// app.get("/", function(req, res){
//     console.log("/user request called");
//     res.send("Welcome to NodeJS");
// });
// app.listen(PORT, function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log(Server listening on PORT ${PORT});
// });







