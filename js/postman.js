// const express = require('express')
// const app = express()


// const PORT = 3000;


// app.get("/user", function(req,res){
//     res.send("Handled GET request")
//     console.log("Handled GET request")

// })
// app.post("/user", function(req,res){
//     res.send("Handled POST request")
// })
// app.delete("/remove", function(req,res){
//     res.send("Handled DELETE request")
// })


// app.listen(PORT, function(err){
//     if(err) console.log("Error in server setup");
//     console.log(`Server listening on port ${PORT}`);
// })




// const express = require("express");
// const app = express();
// app.use(express.json());

// const courses=[
//     {id:1, title: 'Node js'},
//     {id: 2, title: 'HTML'},
//     {id: 3, title: 'CSS'},
//     {id: 2, title: 'JS'},
// ]

// //Read request Handlers
// app.get("/api/courses", (req, res) =>{
//     res.send(courses);
// })
// +
// app.get("/api/courses/:id", (req, res)=>{
//     const courses = courses.find(c=> c.id === parseInt(req.params.id));
//     if(!course){
//         res.status(404).send('Not Found');
//         res.send(course);
//     }
// });

// //CREATE Request Handler
// app.post('/api/courses', (req, res)=>{
//     const course ={
//         id: courses.length+1,
//         title: req.body.title
//     };
//     courses.push(course);
//     res.send(course);
// })
// //Update Request handler
// app.put('/api/courses/:id', (req, res)=>{
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if(!course) return res.status(404).send('Not Found');
//     course.title = req.body.title;
//     res.send(course);
// })
// //Delete Request Handler
// app.delete('/api/courses/:id', (req, res)=>{
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if(!course) return res.status(404).send('Not Found');   
//     const index = courses.indexOf(course);
//     courses.splice(index, 1);   
//     res.send(course);
// });

// app.listen(2000);





