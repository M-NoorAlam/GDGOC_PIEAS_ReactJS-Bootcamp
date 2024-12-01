import React from "react";
import { BookProvider } from "./Components/BookContext";
import AllBooks from "./Components/AllBooks";
import FavBooks from "./Components/FavBooks";
import BorrowedBooks from "./Components/BorrowedBooks";

const App = () => {
  return (
    <BookProvider>
      <div>
        <AllBooks />
        <FavBooks />
        <BorrowedBooks />
      </div>
    </BookProvider>
  );
};

export default App;
