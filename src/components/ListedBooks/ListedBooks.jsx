import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredRead } from '../../utility/addToDB';
import Book from '../books/Book';


const ListedBooks = () => {
const [readList, setReadList] = useState([])
  const  allBooks = useLoaderData();

  // console.log(allBooks);

  // ideally we will directly get the read book from the database 

  useEffect(() => {
       const storedReadList = getStoredRead();
       const storedReadListInt = storedReadList.map(id => parseInt(id))
      //  worst way
      
   
      console.log(storedReadList, storedReadListInt, allBooks);

      const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))


      setReadList(readBookList);
      
  }, [])

  return (
    <div>
      <h3 className='my-12'>This is a Listed Books</h3> 

<div className='my-14'>
    <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1: {readList.length}</h2>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        {
          readList.map(book => <Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
</div>


    </div>
  );
};

export default ListedBooks;