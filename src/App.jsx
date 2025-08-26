import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='container mx-auto px-5 md:px-0'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App