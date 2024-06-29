import React from 'react';
import ReactDOM from 'react-dom/client';
import "@fontsource/inter/400.css";
import './index.css';
import App from './App';
import HomePage from './pages/HomePage';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

