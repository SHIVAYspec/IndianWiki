import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ThemeLoader from './components/themes/main';
import { HomeRouter } from './pages/home';


function Main(): React.ReactNode {
  const router = createBrowserRouter([
    HomeRouter(),
  ]);
  return <RouterProvider router={router} />
  // return <BrowserRouter>
  //   <Routes>
  //     <Home />
  //   </Routes>
  // </BrowserRouter>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeLoader>
      <Main />
    </ThemeLoader>
  </React.StrictMode>,
)
