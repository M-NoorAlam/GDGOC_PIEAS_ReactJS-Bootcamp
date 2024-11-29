import { Books } from "./Books.mjs";

// Qs.1 A function that prints books titles with rating higher than 4.5.
const HigherRatings = Books.filter(book=>book.rating>4.5);
HigherRatings.forEach(book => console.log(`Title: ${book.title} Ratings: ${book.rating}`)); 


/*Qs.2 A function that iterates over an array of books and prints their details
(title, author, rating, genre). Use destructuring to extract these values.*/
Books.forEach(({ title, author, rating, genre }) => {
    console.log(
        `Title: ${title} 
        Author: ${author}
        Rating: ${rating}
        Genre ${genre}`);
  });
  

//Qs.3  A function that prints book titles with the genre “fiction”.
const fictionalBook = Books.filter(item => item.genre === "Fiction")
fictionalBook.forEach(item=>console.log(`Title: ${item.title} Genre: ${item.genre}`))

// // Qs.4 A function that display an array of book authors.
const BooksAuthors = Books.forEach(i=>console.log(`Title: ${i.title} Author: ${i.author}`))
console.log(BooksAuthors)
