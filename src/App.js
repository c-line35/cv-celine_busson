
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.min.css'
import Main from './pages/Main';


function App() {


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>   
      </BrowserRouter>
      );
   
  
}

export default App;
