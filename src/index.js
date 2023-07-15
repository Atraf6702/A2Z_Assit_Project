import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 

import Task1 from './pages/Task1';
import Task2 from './pages/Task2';
import Task3 from './pages/Task3';
import Login from './pages/Login';
import NewTicketPage from './pages/TicketPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/task1",
    element: <Task1/>,
  },
  {
    path: "/task2",
    element: <Task2/>,
  },
  {
    path: "/error",
    element: <Task3/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/create-ticket",
    element: <NewTicketPage/>,
  },
 
 
 
]); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
