import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Analytics } from '@vercel/analytics/react'
import {Outlet, Link} from 'react-router-dom'
import { useState } from 'react'

function App() { 
  const menus = [
    { text: "Home", path: "/" },
    { text: "About", path: "about" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Analytics/>
        <div className={`text-2xl mt-40 flex justify-end w-full h-30 rounded-md pointer-events-none absolute transition-opacity duration-300 ease-in-out} ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className="flex flex-col gap-3 mr-5 p-6 text-pink-200 bg-mantle/30 backdrop-blur-sm rounded-2xl">
            {menus.map((item) => (
              <Link to={item.path} key={item.text} onClick={() => setIsOpen(false)} className={`${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      <div className="flex justify-center">
            <div className="w-4/5 mt-20 max-w-4xl">
                <header className="mb-24">
                  <div className='flex justify-between'>
                    <a href="https://github.com/koipix" className="inline-flex items-center">
                        <img src="https://avatars.githubusercontent.com/u/92094832?v=4" 
                             alt="miii"
                             className="h-24 rounded-xl mr-8"/>
                        <span className="text-gray-200 text-3xl">
                            Koi <FontAwesomeIcon icon={ faHeart }/>
                        </span>
                    </a>
                    <nav className='flex items-center'>
                      <ul className='hidden sm:flex flex-inline text-xl font-medium gap-x-3 text-pink-200'>
                        <li><Link to="/"><span className="hover:underline">Home</span></Link> |</li>
                        <li><Link to="about"><span className="hover:underline">About</span></Link> |</li>
                        <li><span className="hover:underline">Projects</span></li>
                      </ul>
                    </nav>
                    <button className="block sm:hidden text-4xl text-pink-200"
                      onClick={() => setIsOpen((prev) => !prev)} >
                      <FontAwesomeIcon icon={faBars}/> 
                    </button>
                  </div>
                </header>
                <Outlet/>
                <footer className="mt-30 mb-5">
                  <p className="text-gray-400">Copyright: Koipix 2025 :3</p>
                </footer>
            </div>
        </div>
    </>
  )
}

export default App
