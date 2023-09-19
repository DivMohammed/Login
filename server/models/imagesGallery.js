const {Schema, model} = require("mongoose")

const imagesGallerySchema = new Schema({
    image: String
})

const UserGallery = model("imagesGalleryUser" ,imagesGallerySchema)
module.exports = UserGallery