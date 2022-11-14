//this is the schema/collection model for MongoDB Atlas
const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    player: {
      type: String,
      trim: true,
    },
    startedDate: {
      type: String,
      trim: true,
    },
    checkpoint: {
      type: Number,
      trim: true,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Game", gameSchema);
