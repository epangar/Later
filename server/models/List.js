const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = {
  //Who opened the list
  userId: { 
    type: Schema.Types.ObjectId, ref: "User" 
  },
  //The list is an array of files
  type: Array,
  //The title
  title : {
    type: String,
    enum: ["Your websites:", "Your articles:", "Your videos:", "Your images:", "Your places:", "Your songs:", "Random stuff:","Others:"],
  },

  content: {
    type: String,
    enum: ["web", "article", "video", "image", "place", "songs", "random","other"],
  },
  comment : String

}

const List = mongoose.model("List", entrySchema);
module.exports = List;