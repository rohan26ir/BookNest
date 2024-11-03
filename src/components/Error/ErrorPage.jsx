import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <div className='text-center my-20'>
      <h2 className='text-5xl mb-10'>Page Not Found </h2>
      <p className='text-4xl'>States: 404</p> 
      <div>
        <Link to={'/'}><div className='bg-red-700 w-40 rounded-xl my-6 cursor-pointer mx-auto px-4 py-1'><h2>Go back to Home</h2></div></Link>
      </div>
      </div>
  </div>
  );
};

export default ErrorPage;