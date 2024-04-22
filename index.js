const http=require('http')
require('./files')

const server=http.createServer(function(req,res){

res.write('Hello World!'); //write a response to the client
res.end(); //end the response


})

server.listen(5000,()=>{
    console.log("Server is running on port no 5000")
})