import React, { useContext } from "react";
import { BookContext } from "../Components/BookContext";

const FavBooks = () => {
  const { favBooks } = useContext(BookContext);

  return (
    <div>
      <h1>Favorite Books</h1>
      {favBooks.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default FavBooks;
