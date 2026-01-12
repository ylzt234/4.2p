// Initialize frontend logic when DOM is fully loaded
$(document).ready(function() {
  // Initialize Materialize CSS components (if used)
  $(".materialboxed").materialbox();
  $(".modal").modal(); // Fix: missing closing parenthesis

  // Fetch book data from backend API on page load
  getBooks();
});

// Function to make GET request to backend API
const getBooks = () => {
  // Fetch data from backend endpoint (matches server.js's /api/books)
  $.get("/api/books", (response) => {
    if (response.statusCode === 200) {
      // Render book cards if data fetch is successful
      renderBookCards(response.data);
    } else {
      // Show error message if fetch fails
      alert("Error: " + response.message); // Fix: typo "rror" → "Error", correct response.message
    }
  });
};

// Function to render book cards in the UI (fix selectors and syntax)
const renderBookCards = (books) => {
  // Fix: typo in DOM selector "boo-ard-container" → "book-card-container"
  const cardContainer = $("#book-card-container");
  cardContainer.empty(); // Clear existing content to avoid duplicates

  // Loop through each book and generate a card
  books.forEach((book) => {
    // Fix: Materialize grid classes (s12 m6 l4), missing spaces in original
    // Fix: template string syntax (${} for variables), missing quotes
    const card = `
      <div class="col s12 m6 l4">
        <div class="card">
          <div class="card-image">
            <!-- Fix: typo "covermge" → "coverImage", correct image path -->
            <img src="${book.image || book.coverImage}" alt="${book.bookTitle || book.title}">
            <span class="card-title">${book.bookTitle || book.title}</span>
          </div>
          <div class="card-content">
            <p><strong>Author:</strong> ${book.author}</p> <!-- Fix: missing closing > in <p> -->
            <p><strong>Year:</strong> ${book.publicationYear || "N/A"}</p> <!-- Fix: typo "Year:" → "Year:" -->
            <p><strong>Genre:</strong> ${book.genre || "N/A"}</p>
            <p><strong>Review:</strong> ${book.review || book.description}</p>
          </div>
        </div>
      </div>
    `;
    cardContainer.append(card); // Add card to container
  });
};