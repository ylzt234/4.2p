// seed.js
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/bookCollectionDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected for seeding"))
  .catch(err => console.error("Seed connection error:", err));


const BookSchema = new mongoose.Schema({
  bookTitle: { type: String, required: true },
  author: { type: String, required: true },
  publicationYear: Number,
  genre: String,
  coverImage: String,
  review: String,
});
const Book = mongoose.model("Book", BookSchema);


const sampleBooks = [
  {
    bookTitle: "The Midnight Library",
    author: "Matt Haig",
    publicationYear: 2020,
    genre: "Fiction",
    coverImage: "images/midnight-library.jpg",
    review: "A thought-provoking story about choice and regret."
  },
  
];


Book.insertMany(sampleBooks)
  .then(() => {
    console.log("Sample books inserted");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error("Seed error:", err);
    mongoose.connection.close();
  });