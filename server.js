const http = require('http') 
const { fileURLToPath } = require('url')

const port = 8080
const host = 'localhost'

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(`   
        <h1>hey i'm nigel :]</h1>
        <p>just tore down my old site and new content will be here soon.<br>
        in the meantime, you can find me in these cool places:</p>
        <a href="http://twitter.com/nimows" target="_blank">tweets</a>&nbsp;
        <a href="http://codepen.com/nimows" target="_blank">codepen</a>&nbsp;
        <a href="http://github.com/nimows" target="_blank">github</a>&nbsp;
    `)
})

server.listen(port, host, () => {
    console.log(`server running on ${host}:${port}...`)
})