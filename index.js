const express = require('express')
const mongoose = require('mongoose')
const novelRouter = require('./routes/novel.js')
const adminRouter = require('./routes/admin.js')
const libraryModel = require('./models/library.js')
const app = express()
mongoDbUrl = "mongodb+srv://thomastomy555:demo@cluster0.3bhjovj.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(mongoDbUrl)

// libraryModel.create({name:"Alex", age:25})
// const name = libraryModel.findById('6590a4e8fd4983172862b198')
// console.log(name)
const dbName = libraryModel.find(
    {name:"Alex"},
"name age",
).exec();
console.log(dbName)

PORT = 3010

app.use("/novel", novelRouter)
app.use("/admin", adminRouter)

app.get('/', (req, res)=>{
    res.send('hi')
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})

