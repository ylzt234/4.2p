// 1. Import required dependencies
const express = require("express");
const app = express();

// 2. Configure middleware (critical for serving static files and parsing requests)
// Serve frontend files from the "public" directory (fix: __dirname + correct folder name)
app.use(express.static(__dirname + "/public"));
// Parse JSON data from POST/PUT requests
app.use(express.json());
// Parse form-encoded data (for future form submissions)
app.use(express.urlencoded({ extended: false }));

// 3. Define static project data (temporary; will replace with MongoDB later)
const cardList = [
  {
    title: "Hiking Adventure",
    image: "images/hiking.jpg", // Ensure this path exists: public/images/hiking.jpg
    link: "About Hiking",
    description: "A 3-day trek through the Rocky Mountains with scenic views."
  },
  {
    title: "Cooking Workshop",
    image: "images/cooking.jpg", // Fix: typo "inage" → "image", correct path
    link: "About Cooking",
    description: "Learn to make authentic Italian pasta from a professional chef."
  },
  {
    title: "Photography Tour",
    image: "images/photography.jpg", // Fix: typo "mges/inages" → "images"
    link: "About Photography",
    description: "Capture city skylines at dawn with a pro photographer guide."
  }
];

// 4. Define REST API endpoint (GET request)
// Endpoint to send project data to the frontend (align with frontend's fetch URL)
app.get("/api/books", (req, res) => { // Fix: changed to /api/books to match frontend
  res.json({
    statusCode: 200, // Success HTTP status code
    data: cardList, // Send static project data (mapped to frontend's "book" structure)
    message: "Data fetched successfully" // Fix: typo "ata" → "Data"
  });
});

// 5. Start the server
const port = process.env.PORT || 3000; // Use environment port (Codespaces) or default 3000
app.listen(port, () => {
  // Fix: typo "console.1og" → "console.log", correct template string
  console.log(`Server running on http://localhost:${port}`);
});