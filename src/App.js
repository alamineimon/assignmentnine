import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Blogs from './components/Blogs/Blogs';
import Statics from './components/Statics/Statics';
import Quiz from './components/Quiz/Quiz';
import { ToastContainer, toast } from "react-toastify";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
        {
          path: "/home",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/topics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/statics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statics></Statics>,
        },
        {
          path: "/quiz/:id",
          loader: async ({params}) =>
            fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element:<Quiz></Quiz>,
        },
        {
          path: "topics/quiz/:id",
          loader: async ({params}) =>
            fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element:<Quiz></Quiz>,
        },
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
export default App;
