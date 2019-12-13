const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;

const secret = "liluo@2019";

//打开 8080 端口监听来自 Github 的 Push 推送
http.createServer(function (req, res) {
  let chunks = '';
  req.on('data', function(chunk) {
    chunks += chunk.toString();
    const sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunks).digest('hex');
    if (req.headers['x-hub-signature'] == sig) {
      exec('git pull');
    }
  });

  res.end('Hello World Form 9ColorDeer');
}).listen(8080);