const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const path = require('path');


// app.use(express.static('assets'));


//카메라 권한
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});






var port = process.env.PORT || 7000; // 1
// const server = app.listen(port, function(){
//  console.log('server on! http://localhost:'+port);
// });
server.listen(port, () => console.log(`Server running on port ${port}`));

