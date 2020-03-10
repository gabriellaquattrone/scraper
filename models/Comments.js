const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create the article schema
const commentsSchema = new Schema({
    comment: String
});

// Create the article model using the schema that we imported
const Comments = mongoose.model('Comments', commentsSchema);

// Export our model
module.exports = Comments;