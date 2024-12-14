const express = require('express')
const path = require('path')
const app = express()
const port = 3003

const dirPath = path.resolve()
app.use(express.static('./dist'))
app.get('*', (req,res) => {
    res.sendFile(path.resolve(dirPath,'frontend','dist','index.html'))
})

app.listen(port, () => {
    console.log('server is running in 3003')
})