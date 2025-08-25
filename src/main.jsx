import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import Contact from './pages/Contact.jsx'
import Error from './pages/Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/product',
        element: <Product />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/card',
        element: <Cart />
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ]
  },
  {
    path: '/*',
    element: <Error />
  }
])
createRoot(document.getElementById('root')).render(
  < StrictMode >
    <RouterProvider router={router} />
  </StrictMode >
)
