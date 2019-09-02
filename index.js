const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let notes = [
    {
        id: 1,
        content: "ReactJS",
        date: "2019-09-02"
    },
    {
        id: 2,
        content: "NodeJS",
        date: "2019-09-02"
    },
    {
        id: 3,
        content: "Redux",
        date: "2019-09-02"
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/notes', (req, res) => {
    res.json(notes)
})

app.get('/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = notes.find(n => n.id === id)
    if(note) {
        res.json(note)
    } else {
        res.status(404).end()
    }
})

app.post('/notes', (req,res) => {
    const maxId = notes.length > 0 
    ? Math.max(...notes.map(n => n.id))
    : 0
    const note = req.body
    note.id = maxId + 1

    notes = notes.concat(note)
    res.json(note)
})

app.delete('/notes/:id', (req,res) => {
    const id = Number(req.params.id)
    notes = notes.filter(n => n.id !== id)
    res.status(204).end()
})

const port = 3001
app.listen(port)
console.log(`Server running on ${port}`)