const express = require('express')
const app = express()
const port = 3003

app.get('/', (req,res) => {
    res.send('hello raju')
})

app.listen(port, () => {
    console.log('server is running in 3003')
})