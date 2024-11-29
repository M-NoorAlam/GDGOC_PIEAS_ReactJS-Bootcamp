import React from 'react';
import { BookProvider } from './component/BookContext';
import BorrowedBooks from './component/BorrowedBooks';
import FavBooks from './component/FavBooks';
import BookCard from './component/BookCard';
import { BooksData } from './component/Books';

const App = () => {
  return (
    <BookProvider>
      <div>
        <h1>My Book App</h1>
        <div>
          {BooksData.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <BorrowedBooks />
        <FavBooks />
      </div>
    </BookProvider>
  );
};

export default App;
