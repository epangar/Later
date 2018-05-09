const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema(
  {
    url: {
      type: String,
      required: [true, "An URL is required"]
    },
    titleFile: String, //Title
    comment: String,
    whichType: {
      type: String,
      enum: ["web", "article", "video", "image", "place", "other"],
      required: [true, "Which type of link it is?"]
    },
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
