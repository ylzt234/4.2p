// public/scripts.js
$(document).ready(function () {
  // Initialize Materialize components (if used)
  $('.materialboxed').materialbox();
  $('.modal').modal();

  // Fetch books from server API
  getBooks();
});

// Function to make GET request to backend
const getBooks = () => {
  $.get("/api/books", (response) => {
    if (response.statusCode === 200) {
      renderBookCards(response.data); // Render data to frontend
    } else {
      alert("Error: " + response.message);
    }
  });
};

// Function to render book cards (unique UI logic)
const renderBookCards = (books) => {
  const cardContainer = $("#book-card-container"); // Match your HTML container ID
  cardContainer.empty(); // Clear existing content

  books.forEach((book) => {
    const card = `
      <div class="col s12 m6 l4">
        <div class="card">
          <div class="card-image">
            <img src="${book.coverImage}" alt="${book.bookTitle}">
            <span class="card-title">${book.bookTitle}</span>
          </div>
          <div class="card-content">
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Year:</strong> ${book.publicationYear}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Review:</strong> ${book.review}</p>
          </div>
        </div>
      </div>
    `;
    cardContainer.append(card);
  });
};