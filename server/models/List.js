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
    required: [true, "Add a title"]
  },

  comment : String

}

const List = mongoose.model("List", listSchema);
module.exports = List;