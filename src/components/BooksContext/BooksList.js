
import React, { useState, useContext } from "react";
import Book from "./Book";
import { BooksContext } from "./BooksContext";

function BooksList() {
  const [book, setBook] = useContext(BooksContext);
  return (
    <div>
      <h1></h1>

      {book && book.map((book, id) => (
        <>
          <Book bookName={book.bookName} bookPrice={book.bookPrice} key={book.id} />
        </>
      ))}
    </div>
  );
}

export default BooksList;

