import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './components/Root/Root';
import ErrorElement from './components/ErrorElement/ErrorElement';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home'
import JobDetails from './components/FeaturedJobs/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/job/:id', loader: () => fetch('../public/jobs.json'), element: <JobDetails /> },
      { path: '/statistics', element: <Statistics /> },
      {
        path: '/appliedJobs',
        loader: () => fetch('jobs.json'), //this is not the best practice. Do not load all data for 1 data
        element: <AppliedJobs />
      },
      { path: '/blog', element: <Blog /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)