const socket=io();

var
 username;

do{
    username=prompt("enter the username");
}while(!username);




const form=document.getElementById('send-container');
const messageInput=document.getElementById('messageInp');
const messageContainer=document.querySelector('.container');


const append=(message,position)=>{
    console.log("i am working")
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add('message');
    messageElement.classList.add( position);
    messageElement.append(messageInp);
}


socket.emit("new-user-joined",username);

socket.on('user-joined',name=>{
    append(`${name} join the chat`,right)

})

// socket.emit("new-user-joined",username);

// socket.on ('user-connected',(socket_name)=>{
//     userjoinleft(socket_name,'joined');
// });

// function userjoinleft(name,status){
    
// }