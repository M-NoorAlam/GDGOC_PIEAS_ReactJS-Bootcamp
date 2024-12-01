import React, { useContext } from "react";
import { BookContext } from "../Components/BookContext";

const BorrowedBooks = () => {
  const { borrowedBooks } = useContext(BookContext);

  return (
    <div>
      <h1>Borrowed Books</h1>
      {borrowedBooks.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BorrowedBooks;
