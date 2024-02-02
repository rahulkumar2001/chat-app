const http=require("http");
const express=require("express");
const app=express();

const server=http.createServer(app);
const port =process.env.PORT||3000

app.use(express.static(__dirname+'/public'));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

const io=require("socket.io")(server)
var users={};

io.on("connection",(socket)=>{
    socket.on("new-user-joined",(username)=>{
        users[socket.id]=username;
        console.log(users)
        socket.broadcast.emit("user-connected",username);
    })

    socket.on('send',message=>{
        socket.broadcast.emit('recieve',users[socket.id])
    })

});

server.listen(port,()=>{
    console.log(`server started at ${port}`)
});