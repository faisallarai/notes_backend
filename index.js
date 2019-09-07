const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const uuid = require('node-uuid')
const cors = require('cors')

const app = express()
app.use(express.static('build'))
app.use(cors())
app.use(bodyParser.json())

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:', request.path)
    console.log('Body:', request.body)
    console.log('---')
    next()
}

app.use(requestLogger)
//app.use(morgan('tiny'))

// // only log error responses 
// app.use(morgan('tiny', {
//     skip: function(req,res) { return res.statusCode < 400}
// }))

// app.use(morgan('combined', {
//     skip: function(req,res) { return res.statusCode < 400}
// }))

morgan.token('body', (request) => {
    return JSON.stringify(request.body)
})

morgan.token('id', (request) => request.id)

// Inject id in the request 
// to be able to call request.id 
const assignId = (req, res, next) => {
    req.id = uuid.v4()
    next()
}

app.use(assignId)
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body :id'))

let notes = [
    {
        id: 1,
        title: "ReactJS",
        date: "2019-09-02"
    },
    {
        id: 2,
        title: "NodeJS",
        date: "2019-09-02"
    },
    {
        id: 3,
        title: "Redux",
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

const generateId = () => {
    const maxId = notes.length > 0 ?
    Math.max(...notes.map(n => n.id))
    : 0

    return maxId + 1
}

app.post('/notes', (req,res) => {

    const body = req.body

    if(!body.title) {
        return res.status(400).json({
            error: 'content missing'
        })
    }

    const newNote = {
        title: body.title,
        important: body.important,
        date: Date(),
        id: generateId()
    }

    notes = notes.concat(newNote)
    res.json(newNote)
})

app.delete('/notes/:id', (req,res) => {
    const id = Number(req.params.id)
    notes = notes.filter(n => n.id !== id)
    res.status(204).end()
})

const unKnownEndpoint = (request, response) => {
    response.status(404).send({error: 'unknown enpoint'})
}

app.use(unKnownEndpoint)

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})
