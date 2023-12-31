const express = require('express')
adminRouter = express.Router()

adminRouter.get('/', (req, res)=>{
    res.send('admin detal')
})


adminRouter.get('/author', (req, res)=>{
    res.send('author')
})

adminRouter.get('/:id', (req, res)=>{
    res.send(req.params.id)
})

module.exports = adminRouter