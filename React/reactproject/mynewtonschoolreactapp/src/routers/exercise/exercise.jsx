import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./BookList";
import { createContext, useState } from "react";
import booksJson from './books.json';
import Book from "./Book";


export const BooksContext = createContext();

function Exercise_01() { 
   
    //State Variable -> Load Books JSON as initial value
    const [books, setBooks] = useState(booksJson);

    return (
         //Set to the entire components! Part
        <BooksContext.Provider value={books}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BookList />} />
                    <Route path="/books" element={<BookList />} />
                    <Route path="/books/:id" element={<Book />} />
                    <Route path="/books/author/:author" element={<Book />} />
                </Routes>
            </BrowserRouter>
        </BooksContext.Provider>
    );
}

export default Exercise_01;
