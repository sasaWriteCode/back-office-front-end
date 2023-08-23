import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { LoginPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
