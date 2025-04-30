import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Home from './component/home.tsx'
import About from './component/about.tsx'
import Post from './component/post.tsx'
import Nyan from './component/nyan.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { index: true, element: <Home/>},
      { path: 'about', element: <About/>},
      { path: 'posts', element: <Post/>},
      { path: '*', element: <Nyan/>},
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
