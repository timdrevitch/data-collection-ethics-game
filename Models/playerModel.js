//this is the schema/collection model for MongoDB Atlas
const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
    },
    playername: {
      type: String,
      trim: true,
    },
    firstname: {
      type: String,
      trim: true,
    },
    lastname: {
      type: String,
      trim: true,
    },
    fullname: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    joinDateString: {
      type: String,
      trim: true,
    },
    gameInProgress: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", playerSchema);
