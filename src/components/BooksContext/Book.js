import React from 'react'

function Book({bookName, bookPrice, id}) {
    return (
        <div>
            <ul>
            <li key={id}>{bookName}</li>
            <li>{bookPrice}</li>
            </ul>
        </div>
    )
}

export default Book
