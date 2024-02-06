require('#Config/env.js')
const mongoose = require('mongoose');


const conectDB = (url) => mongoose.connect(url).then(() => {
    console.log("Database conencted")
})


module.exports = conectDB; 