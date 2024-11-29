import BookCard from "./BookCard";
import { Books } from "./books";

const BookDetails = () => {
    return (
        <div>
            <h1 className="section">Books Details in our Library</h1>
        <p>
            {Books.map(book => (
                <BookCard key={book.id} {...book} />
            ))}
        </p>
        </div>
    );
};

export default BookDetails;
