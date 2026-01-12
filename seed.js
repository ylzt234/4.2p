// Import Mongoose for MongoDB object modeling
const mongoose = require("mongoose");

// Connect to MongoDB (fix: database name typo "bookcollectionD" → "bookcollectionDB")
mongoose.connect("mongodb://localhost:27017/bookcollectionDB", {
  useNewUrlParser: true, // Fix: typo "useNewUr1Parser" → "useNewUrlParser"
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected for seeding")) // Fix: typo "MongoD" → "MongoDB"
.catch(err => console.error("Seed connection error:", err));

// Define Book schema (fix: typo "string" → "String" for data type)
const BookSchema = new mongoose.Schema({
  bookTitle: { type: String, required: true },
  author: { type: String, required: true }, // Fix: lowercase "string" → uppercase "String"
  publicationYear: Number,
  genre: String,
  coverImage: String,
  review: String,
});

// Create Book model (fix: typo "mongoose.mode1" → "mongoose.model")
const Book = mongoose.model("Book", BookSchema);

// Sample book data (fix typos and missing commas)
const sampleBooks = [
  {
    bookTitle: "The Midnight Library",
    author: "Matt Haig",
    publicationYear: 2020,
    genre: "Fiction", // Fix: typo "iction" → "Fiction"
    coverImage: "images/midnight-library.jpg", // Fix: typo "ags/mdng-1ibrary.jp" → valid path
    review: "A thought-provoking story about choice and regret." // Fix: missing leading "A"
  }
];

// Insert sample books into MongoDB
Book.insertMany(sampleBooks)
.then(() => {
  console.log("Sample books inserted");
  mongoose.connection.close(); // Close connection after seeding
})
.catch(err => {
  console.error("Seed error:", err); // Fix: typo "eed" → "Seed"
  mongoose.connection.close();
});