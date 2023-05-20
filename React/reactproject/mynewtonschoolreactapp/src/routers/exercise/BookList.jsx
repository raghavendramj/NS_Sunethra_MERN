import { useContext } from "react";
import { BooksContext } from "./exercise";

function BookList() {

    const receivedBooks = useContext(BooksContext);

    return (
        <div className="container">
            <h1>BookList Component!</h1>
            <table className="table table-striped table-bordered">
                <thead>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Country</th>
                    <th>Language</th>
                    <th>Year</th>
                </thead>
                <tbody>
                    {receivedBooks.map(eachBook => {
                        return <tr>
                            <td>{eachBook.author}</td>
                            <td>{eachBook.title}</td>
                            <td>{eachBook.country}</td>
                            <td>{eachBook.language}</td>
                            <td>{eachBook.year}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <tr>

            </tr>


        </div>
    );
}

export default BookList;