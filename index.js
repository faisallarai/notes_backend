const http = require('http')

const notes = [
    {
        id: 1,
        content: "Hello",
        date: "2019-09-02"
    }
]
const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(JSON.stringify(notes))
})

const port = 3001
app.listen(port)
console.log(`Server running on ${port} `)