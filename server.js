const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const path = require('path');
//디렉터리 내의 파일읽어오기
// const fs = require('fs');
// var dir1 = './dataset/Bengal';
// var files = fs.readdirSync(dir1); //디렉터리 읽어오기
// console.log(files);

// for(var i =0;i<files.length;i++){
//     var file = files[i];
//     console.log(file);
// }

app.use(express.static('dataset'));


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

//dataset
app.get('/dataset/Bengal/1.jpg',function(request,response){ //요청을 받으면
    response.sendFile(path.join(__dirname+'/dataset/Bengal/1.jpg')); //이렇게 응답해준다
});
// app.get('/dataset/Russianblue/1.jpg',function(request,response){ //요청을 받으면
//     response.sendFile(path.join(__dirname+'/dataset/Russianblue/1.jpg')); //이렇게 응답해준다
// });


for(i=0;i<10;i++){

    app.get('/dataset/Bengal/'+i+'.jpg',function(request,response){
        response.sendFile(path.join(__dirname+'/dataset/Bengal/'+i+'.jpg')); 
    });
}

for(i=0;i<10;i++){

    app.get('/dataset/Boombey/'+i+'.jpg',function(request,response){
        response.sendFile(path.join(__dirname+'/dataset/Boombey/'+i+'.jpg')); 
    });
}

for(i=0;i<10;i++){

    app.get('/dataset/Ragdoll/'+i+'.jpg',function(request,response){
        response.sendFile(path.join(__dirname+'/dataset/Ragdoll/'+i+'.jpg')); 
    });
}

for(i=0;i<10;i++){

    app.get('/dataset/Russianblue/'+i+'.jpg',function(request,response){
        response.sendFile(path.join(__dirname+'/dataset/Russianblue/'+i+'.jpg')); 
    });
}


var port = process.env.PORT || 7000; // 1
// const server = app.listen(port, function(){
//  console.log('server on! http://localhost:'+port);
// });
server.listen(port, () => console.log(`Server running on port ${port}`));

