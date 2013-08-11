var http = require('http');

var options= {
  host: '192.168.1.35',
  port: 8083,
  path: '/ZwaveApi/Data/'+ +new Date(),
  method: 'POST'
};

setInterval(postZwave,500);

function postZwave(){
http.request(options, function(res){
   console.log('Status:'+ res.statusCode);
   console.log('Headers'+ JSON.stringify(res.headers));
   res.setEncoding('utf8');
   res.on('data' ,function(chunk){
     console.log(new Date() + 'BODY '+ chunk);
  });
}).end();
}
