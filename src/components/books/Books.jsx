import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {

  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('./booksData.json')
    .then(res => res.json())
    .then(data => setBooks(data))
  },[])
  return (
    <div>
      <h2 className='text-4xl font-bold text-center my-5'>Books {books.length}</h2>
      <div className='grid grid-cols-3 gap-10'>
        {
          books.map(book => <Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;