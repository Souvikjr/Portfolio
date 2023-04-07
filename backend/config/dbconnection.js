const mongoose = require("mongoose")


mongoose.set("strictQuery" , false)


const connectDB = async () => {
    const connect = await mongoose.connect(process.env.connection_string)
      .then((result) => {
        console.log("database portfolio connected")
      })
      .catch((err) => {
        console.log(err)
      })

}



module.exports = connectDB