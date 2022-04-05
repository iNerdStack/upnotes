
import './assets/styles/App.css'
import { BrowserRouter, Routes,Route  } from 'react-router-dom';
import Home from './pages/Home';
import Redux from './pages/Redux';


export default function App() {
 
  return (
<div>
        <BrowserRouter>
          <Routes>
            <Route path="/"   element={ <Home />}>
            </Route>
            <Route path="/redux" element={<Redux/>} > </Route>
        </Routes>
        </BrowserRouter>
        </div>
  )
}
