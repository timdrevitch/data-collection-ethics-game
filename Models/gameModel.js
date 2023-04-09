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
    postedAboutArt: {
      type: Boolean,
    },
    viewedCompanyBeef: {
      type: Boolean,
    },
    readTerms: {
      type: Boolean,
    },
    commentIncludesInterviewCount: {
      type: Boolean,
    },
    postIsGood: {
      type: Boolean,
    },
    askedAboutSearch: {
      type: Boolean,
    },
    postAboutInterviews: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Game", gameSchema);
