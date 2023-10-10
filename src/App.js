
import './App.css';
import Home from './screens/Home';
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './screens/Login';
import Signup from './screens/Signup';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}  />
    <Route path="/signup" element={<Signup/>}  />
    <Route path="/login" element={<Login/>}  />
  
   </Routes>
   </BrowserRouter>
    </>
      
  );
}

export default App;
