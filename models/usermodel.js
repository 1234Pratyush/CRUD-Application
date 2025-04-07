const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ProjectCRUD');
  
 const userSchema  = mongoose.Schema({
      name : {
        type : String
      },
      email : {
        type: String,
      },
      id : {
        type :Number
      },
      gender : {
        type : String
      },
      profession : {
        type : String
      },
      age : {
        type : Number
      }
})

module.exports = mongoose.model('user',userSchema);


