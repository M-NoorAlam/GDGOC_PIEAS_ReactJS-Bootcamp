import React, { useContext, useEffect, useState } from "react";
import Books from "../Components/Books.json";
import { BookContext } from "../Components/BookContext";

const AllBooks = () => {
  const { addToFavBooks, addToBorrowedBooks } = useContext(BookContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("Books.json")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);
  useEffect(() => {
    setBooks(Books); 
  }, []);
  
  

  return (
    <div>
      <h1>All Books</h1>
      {books.map((book) => (
        <div key={book.id} style={{ border: "1px solid black", margin: "10px" }}>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <p>Ratings: {book.ratings}</p>
          <button onClick={() => addToFavBooks(book)}>Add to Favorites</button>
          <button onClick={() => addToBorrowedBooks(book)}>Borrow Book</button>
        </div>
      ))}
    </div>
  );
};

export default AllBooks;
