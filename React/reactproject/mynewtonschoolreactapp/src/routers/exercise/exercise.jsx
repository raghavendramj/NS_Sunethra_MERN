import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./BookList";
import { createContext, useState } from "react";
import booksJson from './books.json';


export const BooksContext = createContext();

function Exercise_01() {

    const [books, setBooks] = useState(booksJson);
    return (
        <BooksContext.Provider value={books}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BookList />} />
                    <Route path="/books" element={<BookList />} />
                </Routes>
            </BrowserRouter>
        </BooksContext.Provider>
    );
}

export default Exercise_01;
