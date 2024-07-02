import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Projects from './Pages/Projects.jsx';
import Hireme from './Pages/Hireme.jsx';
import Main from './Layout/Main.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path:'/projects',
        element:<Projects></Projects>,
      },
      {
        path:'/hireMe',
        element:<Hireme></Hireme>,
      }
    
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
