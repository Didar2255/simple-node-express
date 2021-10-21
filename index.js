const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.json())
const port = process.env.PORT || 5000

const users = [
    { id: 0, name: 'Didar', Phone: '01245893', position: 'web developer', salary: 40000, email: 'didar.123@gmail.com' },
    { id: 1, name: 'shakib', Phone: '01246893', position: 'filancer', salary: 12000, email: 'shakib.123@gmail.com' },
    { id: 2, name: 'Munna', Phone: '0124541893', position: 'job holdar', salary: 30000, email: 'Munna.123@gmail.com' },
    { id: 3, name: 'Anisha', Phone: '01278893', position: 'House wife', salary: 20000, email: 'Anisha.123@gmail.com' },
    { id: 4, name: 'Rahat', Phone: '012451936', position: 'Student', salary: 10000, email: 'Rahat.123@gmail.com' },
    { id: 5, name: 'Sumaiya', Phone: '012445873', position: 'Student', salary: 13000, email: 'Sumaiya.123@gmail.com' }
]
app.get('/', (req, res) => {
    res.send('oooops It is my second node,my Name is didar,are you here me')
})

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)

    }
    else {
        res.send(users)
    }
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting get post', req.body)
    res.json(newUser)

})

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
})

app.listen(port, () => {
    console.log('Explore node ', port)
})