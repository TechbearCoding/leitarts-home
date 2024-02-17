import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/header';
import Home from './components/Main/Home/home';
import Resume from './components/Main/Resume/resume';

function App() {
  return (
    <div>
      <div style={{height: '6em'}} >
        <Header />
      </div>
      
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;