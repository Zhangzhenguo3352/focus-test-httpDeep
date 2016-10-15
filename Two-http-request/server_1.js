var http = require('http');
var fs = require('fs');
//另外一台服务器 访问这个服务
	http.createServer(function(req,res){
		
		if(req.url == '/'){
			fs.createReadStream('./1.txt',{encoding:'utf-8'}).pipe(res)
			
		}
	}).listen(4000)