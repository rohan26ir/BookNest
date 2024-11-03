import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {

  const {bookId, bookName, author, image, review, category, rating, tags} = book;
  return (
    <Link to={`/books/${bookId}`}>
       <div>
      <div>
      <div className="card bg-base-100 w-96 shadow-xl p-2">
  <figure className='bg-gray-400 p-10 rounded-lg'>
    <img
      src={image}
      className='h-[166px]'
      alt={bookName} />
  </figure>
  <div className="card-body">
    <div className='flex justify-center gap-5'>
      {
        tags.map((tag, index) => <button 
        key={index}
          className='btn hover:text-green-700 px-4 text-white bg-green-600'>{tag}</button>)
      }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>By: {author}</p>
    <div class="border-t-2 border-dashed my-4"></div>
    
    <div className='flex justify-between'>
      <div>{category}</div>
      <div>{rating}  <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
</div></div>
    </div>
  </div>
</div>
      </div>
    </div>
    </Link>
  );
};

export default Book;