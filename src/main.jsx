import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    loader:()=> fetch('http://localhost:8500/coffee/'),
    children:[
      {
        path:'/addcoffee',
        element:<AddCoffee/>
      },
      {
        path:'/updatecoffee/:id',
        element:<UpdateCoffee/>,
        loader:({params})=> fetch(`http://localhost:8500/coffee/${params.id}`)
      },

      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
