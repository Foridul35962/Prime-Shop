import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  //Dynamic Height Detection
  const navbarRef = useRef(null);
  const [height, setHeight] = useState(0);
  useEffect(()=>{
    const updateHeight = ()=>{
      if (navbarRef.current){
        setHeight(navbarRef.current.offsetHeight);
      }
    }
    updateHeight();
    window.addEventListener('resize',updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  },[])

  return (
    <div className='overflow-hidden'>
      <Navbar navbarRef={navbarRef}/>
      <div style={{ marginTop: `${height}px` }}>
      <Outlet />
      </div>
    </div>
  )
}

export default App