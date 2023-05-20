import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "./exercise";

function Book() {
    const { id } = useParams();
    const books = useContext(BooksContext);
    const bookObject = books.find(b => parseInt(id) === parseInt(b.id));
    return (
        <div className="container m-3">
            <h2>Details of book {id}</h2>
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
                    <tr>
                        <td>{bookObject.id}</td>
                        <td>{bookObject.author}</td>
                        <td>{bookObject.title}</td>
                        <td>{bookObject.country}</td>
                        <td>{bookObject.language}</td>
                        <td>{bookObject.year}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Book;