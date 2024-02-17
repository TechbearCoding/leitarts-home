import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/header';
import Home from './components/Main/Home/home';
import Resume from './components/Main/Resume/resume';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;