import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredRead } from '../../utility/addToDB';

const BookDetail = () => {

  const {bookId} = useParams();

  const data = useLoaderData();
  const id = parseInt(bookId);

  const book = data.find(book => book.bookId === id)
  // console.log(book);

  const {bookId: CuBookId, image, bookName, author, category, review, totalPages, publisher,yearOfPublishing,tags, rating} = book;


  const handleMarkasRead = (id)=>{

    /**
     * underStand what to store or save => bookId
     * where to store: Database
     * array, list, colllection:
     * check : if the is already in  the readlist.
     * if not, then add the book
     * if yes, do not add the book
     * 
    */
   addToStoredRead(id)
  }


  return (
    <div className='my-10 mx-4'>
      <h2>Book Details {CuBookId}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className=' bg-gray-300 justify-center items-center flex p-10 rounded-lg'>
        <img 
        className='h-[480px]'
        src={image} alt="" />
        </div>
        <div>
          <h2 className='text-4xl font-bold mb-2'>{bookName}</h2>
          <p>By: {author}</p>

          <div className='border-t-2 my-3'></div>

          <p>{category}</p>
          <div className='border-t-2 my-3'></div>
          <p><span className='font-bold'>Review:</span> {review}</p>
          <div className='flex items-center'>
            <div><p>Tags:</p></div>

            <div className='my-5'>
            {
              tags.map((tag, index) => <div 
              key={index}
              className='btn mx-2 bg-green-500 text-white' 
              >{tag}</div>)
            }
            </div>
          </div>

          <div className='border-t-2 my-3'></div>

          <div className='space-y-1'>
          <p>Number of Page: {totalPages}</p>
          <p>Publisher: {publisher}</p>
          <p>Year of Publishing: {yearOfPublishing}</p>
          <p>Rating: {rating}</p>
          </div>

          <div className='space-x-4 my-5'>
            <button onClick={() => handleMarkasRead(bookId)}  className='btn btn-outline'>Mark as Read</button>
            <button className='btn bg-rose-600'>Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;