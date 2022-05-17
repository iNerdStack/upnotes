
import './assets/styles/App.css'
import { BrowserRouter, Routes,Route  } from 'react-router-dom';
import Index from './pages';
import Redux from './pages/Redux';
import CreateNote from './pages/create-note';


export default function App() {
 
 return (
 <div>
        <BrowserRouter>
          <Routes>
            <Route path="/"   element={ <Index />}>
         </Route>
         <Route path="/create-note"   element={ <CreateNote />}>
         </Route>
            <Route path="/redux" element={<Redux/>} > </Route>
        </Routes>
        </BrowserRouter>
        </div>
  )
}
