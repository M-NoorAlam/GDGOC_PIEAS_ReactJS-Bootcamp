import React, { useContext } from 'react';
import { BookContext } from './BookContext';

const BookCard = ({ book }) => {
  const { addBorrowedBook, addFavBook } = useContext(BookContext);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <button onClick={() => addBorrowedBook(book)}>Add Me</button>
      <button onClick={() => addFavBook(book)}>Favorite</button>
    </div>
  );
};

export default BookCard;
