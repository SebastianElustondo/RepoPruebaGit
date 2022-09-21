import React from 'react';
import Exercise1 from './Exercises/Exercise1/Exercise1';
import Exercise2 from './Exercises/Exercise2/Exercise2';
import Exercise3 from './Exercises/Exercise3/Exercise3';
import Exercise4 from './Exercises/Exercise4/Exercise4';
import Exercise5 from './Exercises/Exercise5/Exercise5';
import Blog from './Exercises/Exercise6/Exercise6';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Exercises/Exercise4/Home/Home';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Exercise1" element={<Exercise1 />} />
          <Route path="/Exercise2" element={<Exercise2 />} />
          <Route path="/Exercise3" element={<Exercise3 />} />
          <Route path="/Exercise4" element={<Exercise4 />} />
          <Route path="/Exercise5" element={<Exercise5 />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Footer" element={<Footer />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
