import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { routes } from './routes/routes'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path={routes.home}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
// rlebhar : on evitera les default
export default App
