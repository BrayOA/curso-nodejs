const http = require ('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('welcome to the server')
        return res.end()
    }

    if (req.url === '/about') {

        // blocking code
        // for (let i = 0; i < 100000; i++){
        //     console.log(Math.random() * i);
        // }
        
        return res.end("abaout page")
    }
    res.end('not found')
})

server.listen(4000)
console.log(`server on port 4000`);