import React, { useContext } from "react";
import { BooksContext } from "./BooksContext";

function Navbar() {
  const [book, setBook] = useContext(BooksContext);
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <h1>Nav</h1>
      <p>No of books:{book.length}</p>
    </div>
  );
}

export default Navbar;