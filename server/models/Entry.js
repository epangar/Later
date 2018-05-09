const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema(
  { 
    listId: { 
    type: Schema.Types.ObjectId, ref: "List" 
    },
    url: {
      type: String,
      required: [true, "An URL is required"]
    },
    titleFile: String, //Title
    comment: String,
    whichType: {
      type: String,
      enum: ["web", "article", "video", "image", "place", "random","other"],
      required: [true, "Which type of link it is?"]
    },
    read: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Entry = mongoose.model("Entry", entrySchema);
module.exports = Entry;
