import { useContext } from "react";
import { BooksContext } from "./exercise";
import { Link } from "react-router-dom";

function BookList() {

    //Fetch part
    const receivedBooks = useContext(BooksContext);

    return (
        <div className="container">
            <h1>BookList Component!</h1>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Country</th>
                        <th>Language</th>
                        <th>Year</th></tr>
                </thead>
                <tbody>
                    {receivedBooks.map(eachBook => {
                        return <tr>
                            <td>{eachBook.id}</td>
                            <td>{eachBook.author}</td>
                            <td>{eachBook.title}</td>
                            <td>{eachBook.country}</td>
                            <td>{eachBook.language}</td>
                            <td>{eachBook.year}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default BookList;