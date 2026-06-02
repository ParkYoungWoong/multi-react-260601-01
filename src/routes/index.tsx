import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Default from './layouts/Default'

const router = createBrowserRouter([
  {
    element: <Default />,
    children: [
      {
        path: '/', // http://localhost:5173/
        element: <Home />
      },
      {
        path: '/about', // http://localhost:5173/about
        element: <About />
      },
      {
        path: '/signin', // http://localhost:5173/signin
        element: <SignIn />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
