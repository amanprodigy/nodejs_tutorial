const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    text: String,
    person: String,
    posted_at: Date,
    accepted: Boolean
});

const PostSchema = new Schema(
  {
    title: String,
    body: String,
    created_at: Date,
    published_at: Date,
    comments: [CommentSchema]
  }
);

const AuthorSchema = new Schema({
    name: String,
    age: Number,
    posts: [PostSchema]
});

const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;
