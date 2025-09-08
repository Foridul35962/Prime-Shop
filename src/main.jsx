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
import { ClerkProvider } from '@clerk/clerk-react'
import { Provider } from 'react-redux'
import APIStore from './store/index.js'
import ProductDetails from './pages/ProductDetails.jsx'


// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


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
        element: <Product />,
      },
      {
        path: '/products/:idx',
        element: <ProductDetails />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/cart',
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
    <Provider store={APIStore}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>    {/* for login */}
        <RouterProvider router={router} />
      </ClerkProvider>
    </Provider>
  </StrictMode >
)
