import React, { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [favBooks, setFavBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const addToFavBooks = (book) => {
    setFavBooks((prev) => [...prev, book]);
  };

  const addToBorrowedBooks = (book) => {
    setBorrowedBooks((prev) => [...prev, book]);
  };

  return (
    <BookContext.Provider
      value={{ favBooks, borrowedBooks, addToFavBooks, addToBorrowedBooks }}
    >
      {children}
    </BookContext.Provider>
  );
};
