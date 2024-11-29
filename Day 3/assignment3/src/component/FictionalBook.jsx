import { Books } from "./books";
import BookCard from "./BookCard";

const FictionalBook = ()=>{
    const fictionalbook = Books.filter((book)=>book.genre === "Fiction")
    return(
        <div>
            <h1 className="section">Top Fictional Books in our Library</h1>
            <p>
                {fictionalbook.map((book) => (
                    <BookCard key={book.id} {...book}/>
                ))}
            </p>
        </div>
    )
}

export default FictionalBook;


