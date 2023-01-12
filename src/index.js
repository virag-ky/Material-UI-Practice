import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Authentication from './pages/authentication/Authentication';
import ErrorPage from './ErrorPage';
import MachineLearning from './pages/machineLearning/MachineLearning';
import Storage from './pages/storage/Storage';
import Functions from './pages/functions/Functions';
import Hosting from './pages/hosting/Hosting';
import Database from './pages/database/Database';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'authentication',
        element: <Authentication />,
      },
      {
        path: 'storage',
        element: <Storage />,
      },
      {
        path: 'functions',
        element: <Functions />,
      },
      {
        path: 'hosting',
        element: <Hosting />,
      },
      {
        path: 'machine-learning',
        element: <MachineLearning />,
      },
      {
        path: 'database',
        element: <Database />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
