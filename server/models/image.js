const {Schema, model} = require("mongoose")

const UPimageSchema = new Schema({
    image: String
})

const UPimage = model("imagesBackgroundUsers" ,UPimageSchema)
module.exports = UPimage