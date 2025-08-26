import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='px-5 md:px-0'>
      <Navbar />
      <div className='fixed top-18'>
      <Outlet />
      </div>
    </div>
  )
}

export default App