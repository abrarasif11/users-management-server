const express = require('express')
const app = express()
const port = process.env.PORT || 6969;
const users = require('./user.json');
const cors = require('cors')

// middle ware // 
app.use(cors());
app.use(express.json());

// get user data // 
app.get('/users', (req, res) => {
    res.send(users)
})

// create server site API 
app.post('/users', (req, res) => {
    console.log("Post API hitting")
    console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length + 1
    users.push(newUser);
})

// for server running // 

app.get('/', (req, res) => {
    res.send('Users Management Server is Ready!!!')
})

// for check the running server // 

app.listen(port, () => {
    console.log(`Server is running on PORT :${port}`)
})