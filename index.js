const express = require('express')
const app = express()

const notes = [
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
    console.log('id',id)
    console.log(notes)
    const note = notes.find(n => {
        console.log(n.id, typeof n.id, id, typeof id, n.id === id)
        return n.id === id
    })
    console.log('note',note)
    res.json(note)
})

const port = 3001
app.listen(port)
console.log(`Server running on ${port}`)