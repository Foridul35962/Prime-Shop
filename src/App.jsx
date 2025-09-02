import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  //Dynamic Height Detection
  const navbarRef = useRef(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (!navbarRef.current)
      return;
    const observer = new ResizeObserver(() => {
      if (navbarRef.current) {
        setHeight(navbarRef.current.offsetHeight);
      }
    });

    observer.observe(navbarRef.current);
    return () => {
      if (navbarRef.current)
        observer.unobserve(navbarRef.current)
    };
  }, [])

  return (
    <div className='overflow-hidden'>
      <Navbar navbarRef={navbarRef} />
      <div style={{ marginTop: `${height}px` }}>
        <Outlet />
      </div>
    </div>
  )
}

export default App