import { useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.min.css'
import MainPage from './pages/MainPage';


function App() {

  const [firstName, setFirstName] = useState()

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage firstName={firstName} setFirstName={setFirstName}/>}/>
        </Routes>   
      </BrowserRouter>
      );
   
  
}

export default App;
