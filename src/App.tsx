import React, { useEffect } from 'react';
import { BrowserRouter as Router,Route,Routes,useNavigate } from 'react-router-dom';
import { ClientsList } from './components/ClientsList';
import Content from './components/Content';
import Client from './Pages/Client';
function App() {

  
  return (      
    <Router>
        <Routes>
          <Route path='/' element={<Content/>} />
          <Route path='/client' element={<Client />} />
        </Routes>  
      </Router>
  );

}

export default App;
