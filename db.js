// const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/"

// const connectToMongo =  ()=> {
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connected To  Mongo Successfully")
//     })
// }
// module.exports = connectToMongo
const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected To Mongo Successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;