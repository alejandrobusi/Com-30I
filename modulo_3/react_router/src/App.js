import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Course from './pages/course';
import Navbar from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/course' element={<Course />} />
        </Routes>
      <Footer/>
    </>
  );
};
