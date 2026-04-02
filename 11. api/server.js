const http = require("http");

http.createServer((req, res) => {
    res.end("API running");
}).listen(3000);
