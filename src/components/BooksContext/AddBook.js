import React, { useState, useContext } from "react";
import { BooksContext } from "./BooksContext";

function AddBook() {
  const [bookName, setBookName] = useState(); //to add book
  const [bookPrice, setPrice] = useState(); //to add price
  const [book , setBooks] = useContext(BooksContext);
  const addBookName = (e) => {
    setBookName(e.target.value);
  };
  const addPrice = (e) => {
    setPrice(e.target.value);
  };

  const addBook = (e) => {
    e.preventDefault();
    setBooks((prevBooks) => [
      ...prevBooks,
      {bookName: bookName, bookPrice: bookPrice }
    ]);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="bookName"
          value={bookName}
          onChange={addBookName}
        />
        <input type="text" name="price" value={bookPrice } onChange={addPrice} />
        <button onClick={addBook}>Add Book</button>
        {/* <button type="reset" >Clear</button> */}
      </form>
    </div>
  );
}

export default AddBook;