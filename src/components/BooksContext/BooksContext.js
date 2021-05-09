import React, { useState, createContext } from "react";

export const BooksContext = createContext();

export function BookProvider(props){
    const [book, setBook]= useState([
        {
    bookName:'Biography',
    bookPrice:900
},
    {bookName:"Biography2",
    bookPrice:899
    }
]);


return(
<BooksContext.Provider value={[book, setBook]}>
{props.children}
</BooksContext.Provider>
)
}