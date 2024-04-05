const express=require('express');
const socketIo=require('socket.io');
const path=require('path');
const app=express();
const server=app.listen(8000,()=>{
    console.log("Server started");
})
const io=socketIo(server);
app.use(express.static(path.join(__dirname)))
io.on('connection',(socket)=>{
    console.log("A user has connect to server");
    socket.on('chat message ',msg=>{
        io.emimt('chat message',msg);
    })
})