import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <div className='mt-15 md:mt-18'>
      <Outlet />
      </div>
    </div>
  )
}

export default App