import GlobalStyle from "./style/global"; 
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Home } from "./pages/Home";
import{ Mars} from './pages/Mars'




function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/marte" element={<Mars/>}/>
       
      </Routes>
      <GlobalStyle/>
    </div>
  );
}

export default App;
