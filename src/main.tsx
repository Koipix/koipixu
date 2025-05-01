import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Home from './component/home.tsx'
import About from './component/about.tsx'
import Post from './component/post.tsx'
import Nyan from './component/nyan.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { index: true, element: 
          <Animator>
            <Home/>
          </Animator>
      },
      
      { path: 'about', element:
          <Animator>
            <About/>
          </Animator>
      },
      { path: 'posts', element:
          <Animator>
            <Post/>
          </Animator>
      },
      { path: '*', element: <Nyan/>},
    ],
  },
]);

function Animator({ children }) {
  return (
    <motion.div
      initial = {{ opacity: 0, x: 5 }}
      animate = {{ opacity: 1, x: 0 }}
      transition = {{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
