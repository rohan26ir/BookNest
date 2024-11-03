import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/Error/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Dashbord from './components/DashBord/Dashbord.jsx';
import BookDetail from './components/BookDetail/BookDetail.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "books/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch("./booksData.json"),   // do not load all books for one book

      },
      {
        
        path: "/ListedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/booksData.json"),  // do not load all data for some 
      },
      {
        path: "/Dashbord",
        element: <Dashbord></Dashbord>,
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
