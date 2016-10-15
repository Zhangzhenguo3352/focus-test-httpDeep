var http = require('http');
// http 深入，里面中的细节
	http.createServer(function(req,res){
		console.log(req.method) // 获取 请求的 方法
		console.log(req.url)    // 获取 请求中的 url , 这里我访问localhost:3006/ , 得到   /
		console.log(req.httpVersion) //获取 http 的版本号
		console.log(req.headers)  // 获取 请求头 对象
		/*
			req.headers 请求体中，包含了那些信息

			{ host: 'localhost:3006',			//主机
			  connection: 'keep-alive',			//保持链接，保持着才会显现connection
			  pragma: 'no-cache',				//缓存控制 不缓存
			  'cache-control': 'no-cache',
			  'user-agent': 'Mozilla/5.0    	//客户端类型
			  				(Macintosh; Intel Mac OS X 10_11_6) 
			  				 Chrome/52.0.2743.116 Safari/537.36',
			  accept: '*\/*',					//可以接收的文件类型
			  referer: 'http://localhost:3006/',
			  'accept-encoding': 'gzip, deflate, sdch',
			  'accept-language': 'zh-CN,zh;q=0.8,en;q=0.6' 
			}
		*/

		res.end()
	}).listen(3006)