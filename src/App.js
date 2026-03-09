import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Cursor from './Components/Cursor/Cursor';
import Hi from './Pages/Hi/Hi';
import Development from './Pages/Development/Development';
import Projects from './Pages/ProjectOverview/ProjectOverview';
import Footer from './Components/Footer/Footer';
import Lego from './Pages/Lego/Lego';

const App = () => {
  return (
    <Router>
      <Background />
      <Navbar />
      <Cursor /> {/* De muis is nu een simpele component! */}

      <main>
        <Routes>
          <Route path="/Hi" element={<Hi />} />
          <Route path="/development" element={<Development />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/lego" element={<Lego />} />
          {/* Overige routes... */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;