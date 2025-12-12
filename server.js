// 1. Import dependencies
const express = require("express");
const app = express();

// 2. Configure middleware (critical for serving files and parsing data)
app.use(express.static(__dirname + "/public")); // Serve frontend files from the "public" folder
app.use(express.json()); // Parse JSON requests (for future POST/PUT requests)
app.use(express.urlencoded({ extended: false })); // Parse form data (if needed)

// 3. Define your "static" data (we’ll replace this with MongoDB later—for now, use this array)
const cardList = [
  {
    title: "Hiking Adventure",
    image: "images/hiking.jpg", // Ensure this image path exists in public/images/
    link: "About Hiking",
    description: "A 3-day trek through the Rocky Mountains with scenic views."
  },
  {
    title: "Cooking Workshop",
    image: "images/cooking.jpg",
    link: "About Cooking",
    description: "Learn to make authentic Italian pasta from a professional chef."
  },
  {
    title: "Photography Tour",
    image: "images/photography.jpg",
    link: "About Photography",
    description: "Capture city skylines at dawn with a pro photographer guide."
  }
];

// 4. Define the REST API endpoint (GET request)
// This endpoint will send the cardList data to the frontend
app.get("/api/projects", (req, res) => {
  res.json({
    statusCode: 200, // Success status code
    data: cardList, // The data to send (our card array)
    message: "Data fetched successfully"
  });
});

// 5. Start the server
const port = process.env.PORT || 3000; // Use environment port or 3000 (default)
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});