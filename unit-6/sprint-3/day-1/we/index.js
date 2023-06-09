const mongoose = require("mongoose")

const main = async () => {
    // logic to contact the Db
    // this connection is asynchronous in nature cause it is giving error after some time
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/learningMongoose")
        // incase of mongoose in vs we cant use insertOne 

        // for insert many
        // await UserModel.insertMany([{ name: "Aman", age: 34, city: "Mumbai" }, { name: "Nrupul", age: 40, city: "Benglore" }, { name: "Chunnu", age: 20, city: "Allahabad" }])

        // for insert one
        const user = new UserModel({ name: "Albert", age: 23, city: "Delhi" })
        await user.save()
        console.log("Inserted data")
        console.log("Connecting to MongoDB")
        // for discnnection
        connection.disconnect()
        console.log("Disconnected")
    } catch (error) {
        console.log("Cannot connect to MongoDB")
        console.log(error)
    }
}

main()

// to make it as a validation form 
const userSchema = mongoose.Schema({
    name: {type : String , require : true},
    age: {type : Number , require : true},
    city: {type : String , require : true}
}, {
    versionKey: false
})


// use only pascal case convention just to create a difference
const UserModel = mongoose.model("user", userSchema)