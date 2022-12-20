const config = require('./configs.json')
const mongoose = require('mongoose');

const db = async () => {
  try{

     const code = `mongodb://127.0.0.1:27017/admin`
    await mongoose.connect(code, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('Connect success fully')
  }
  catch(err){
      console.log(err)
  }
}

module.exports = db
