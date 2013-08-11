var http = require('http');
var math=  require('mathjs');

setInterval(postZwave,1000);

function postZwave(){

var options= {
  host: '192.168.1.35',
  port: 8083,
  path: '/ZwaveApi/Data/'+ math.round(new Date()/1000),
  method: 'POST'
};

console.log('Options ');
console.log(options);


http.request(options, function(res){
   console.log('Status:'+ res.statusCode);
   console.log('Headers'+ JSON.stringify(res.headers));
   res.setEncoding('utf8');
   res.on('data' ,function(chunk){
     console.log(new Date() + 'BODY '+ chunk);
  });
}).end();
}
