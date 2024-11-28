import BookCard from "./BookCard";
import { Books } from "./books";

const HighRatedBooks = () => {
    const highRated = Books.filter(book => book.rating > 4.5);
    return (
        <div>

        <h1 className="section">Our high rated books</h1>
     
        <div className="hrb">
            {highRated.map(book => (
             <p><BookCard key={book.id} {...book} /></p>
            ))}
       
        </div>
        </div>
    );
};

export default HighRatedBooks;
