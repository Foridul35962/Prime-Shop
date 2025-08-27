import { UserButton, useUser } from '@clerk/clerk-react'
import { FaUserCircle } from 'react-icons/fa';
import { FaCaretDown, FaLocationDot } from 'react-icons/fa6';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Menubar = ({ menuBar, mode, setMode, setMenuBar, location, setHandleLocation, handleLocation }) => {
    const { user, isLoaded } = useUser();

    return (
        <div className={`${menuBar ? 'left-0' : '-left-full'} bg-white dark:bg-gray-700 dark:text-white fixed bottom-0 top-0 z-20 flex flex-col text-xl transform transition-all duration-300 w-1/2 lg:hidden items-center justify-center shadow-2xl gap-5`}>
            <div className='flex gap-2'>
                {
                    isLoaded && user ? <UserButton /> : <FaUserCircle size={50} />
                }
                <div className='text-sm'>
                    <h1 className='-mb-1'>
                        Hello, {isLoaded && user ? user.firstName : 'Guest'}
                    </h1>
                    <h1>Premium User</h1>
                </div>
            </div>
            <div className='items-center gap-2 flex'>
                <div>
                    <FaLocationDot className='text-red-600 text-xl' />
                </div>
                <div className='flex items-center text-lg gap-1.5'>
                    {location ? <div>
                        <p>{location.locality}</p>
                        <p>{location.city}</p>
                    </div> : <div>Add Address</div>
                    }
                    <FaCaretDown className='cursor-pointer' onClick={() => {
                        setHandleLocation(!handleLocation);
                        setMenuBar(!menuBar)}} />
                </div>
            </div>
            <div>
                <ul className='flex flex-col gap-8 text-lg [&>*]:font-semibold items-center'>
                    <li><NavLink to='/' onClick={() => setMenuBar(!menuBar)} className={({ isActive }) => isActive ? 'border-b-3 border-red-700' : 'transform transition-all duration-300 hover:text-xl'}>Home</NavLink></li>
                    <li><NavLink to='/product' onClick={() => setMenuBar(!menuBar)} className={({ isActive }) => isActive ? 'border-b-3 border-red-700' : 'transform transition-all duration-300 hover:text-xl'}>Product</NavLink></li>
                    <li><NavLink to='/about' onClick={() => setMenuBar(!menuBar)} className={({ isActive }) => isActive ? 'border-b-3 border-red-700' : 'transform transition-all duration-300 hover:text-xl'}>About</NavLink></li>
                    <li><NavLink to='/contact' onClick={() => setMenuBar(!menuBar)} className={({ isActive }) => isActive ? 'border-b-3 border-red-700' : 'transform transition-all duration-300 hover:text-xl'}>Contact</NavLink></li>
                    <li><NavLink to='/cart' onClick={() => setMenuBar(!menuBar)} className={({ isActive }) => isActive ? 'border-b-3 border-red-700' : 'transform transition-all duration-300 hover:text-xl'}>Cart</NavLink></li>
                    <li className='text-xl cursor-pointer'
                        onClick={() => {
                            setMenuBar(!menuBar);
                            setMode((mode) => {
                                const newMode = !mode;
                                document.documentElement.classList.toggle('dark', newMode);
                                return newMode;
                            })
                        }}>{mode ? <MdLightMode /> : <MdDarkMode />}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menubar