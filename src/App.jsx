import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Home from './Component/Home';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
   
      <BrowserRouter>
        <Header/>
        <div className="App">
        <Routes>
          <Route  path="/" element = {<Home/>} />
        </Routes>
        </div>
       </BrowserRouter>

  )
}

export default App
