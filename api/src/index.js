
const express = require ('express')
const port = process.env.PORT || 8000;
const path = require('path')


const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(8000, () =>
console.log('Server is running on port 800'));

// npx nodemon