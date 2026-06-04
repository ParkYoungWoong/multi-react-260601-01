import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
// import Home from './pages/Home'
// import About from './pages/About'
// import SignIn from './pages/SignIn'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
// import NotFound from './pages/NotFound'
import Default from './layouts/Default'
import { requiresAuth, guestOnly } from './loaders'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const SignIn = lazy(() => import('./pages/SignIn'))
// const Movies = lazy(() => import('./pages/Movies'))
// const MovieDetails = lazy(() => import('./pages/MovieDetails'))
const NotFound = lazy(() => import('./pages/NotFound'))

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
        loader: guestOnly,
        element: <SignIn />
      },
      {
        path: '/movies',
        loader: requiresAuth,
        element: <Movies />,
        children: [
          {
            path: '/movies/:movieId', // http://localhost:5173/movies/tt01234567
            element: <MovieDetails />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
