const express = require('express')
novelRouter = express.Router()

novelRouter.get('/', (req, res)=>{
    res.send('novels')
})


novelRouter.get('/author', (req, res)=>{
    res.send('author')
})

novelRouter.get('/:id', (req, res)=>{
    res.send(req.params.id)
})

module.exports = novelRouter