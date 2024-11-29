import { Books } from "./books";

const BookAuthors = () => {
    const authors = Books.map(book => book.author);
    return (
        <div>
<h1 className="section">Top Authors in our Library</h1>
        <h3>Authors</h3>
        <ul>
            {authors.map((author, index) => (
                <li key={index}>{author}</li>
            ))}
        </ul>
            </div>
    );
};

export default BookAuthors;
