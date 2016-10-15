var http = require('http');
// 这个页面 运行 node server_2.js  ,去拿 server_1.js 服务器 ，返回的 1.txt 的数据
	var options = {
		method : 'GET',
		path:'/',
		host:'localhost',
		port:'4000'
	}

	var client = http.request(options,function(req){
		var buffer = [];
		req.on('data',function(data){
			buffer.push(data)
		})
	
		req.on('end',function(data){
				var result = Buffer.concat(buffer)
				console.log(result.toString())
		})
	})
	
	// 当 end 的时候 才会真正向服务器发送请求
	client.end()