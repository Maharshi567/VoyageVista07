const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://0.0.0.0/DataBase').then(()=>{
    console.log('connected to DB')
})

module.exports = connection