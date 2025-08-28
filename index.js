const express = require('express')
const app = express()
const port = process.env.PORT || 6969;
const users = require('./user.json');
const cors = require('cors')

// middle ware // 
app.use(cors());


// get user data // 
app.get('/users', (req, res) => {
    res.send(users)
})

// for server running // 

app.get('/', (req, res) => {
    res.send('Users Management Server is Ready!!!')
})

// for check the running server // 

app.listen(port, () => {
    console.log(`Server is running on PORT :${port}`)
})