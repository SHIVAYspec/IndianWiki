import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ThemeLoader from './components/themes/main';
import { HomeRouter } from './pages/home';


function Main(): ReactNode {
  const router = createBrowserRouter([
    HomeRouter(),
  ]);
  return <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeLoader>
      <Main />
    </ThemeLoader>
  </React.StrictMode>,
)
