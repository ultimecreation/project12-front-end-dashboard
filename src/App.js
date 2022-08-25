import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import LeftSideBar from './layout/LeftSidebar/LeftSideBar';
import Community from './pages/Community/Community';
import Cycling from './pages/Cycling/Cycling';
import Home from './pages/Home/Home';
import Profile from './pages/Profil/Profile';
import Settings from './pages/Settings/Settings';
import Swimming from './pages/Swimming/Swimming';
import Workout from './pages/Workout/Workout';
import Yoga from './pages/Yoga/Yoga';

function App() {
  return (
    <div className="container">

      <BrowserRouter>
        <Navbar />
        <div className="page-content">
          <LeftSideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profile/>} />
            <Route path="/reglage" element={<Settings/>} />
            <Route path="/communaute" element={<Community/>} />
            <Route path="/yoga" element={<Yoga/>} />
            <Route path="/natation" element={<Swimming/>} />
            <Route path="/velo" element={<Cycling/>} />
            <Route path="/musculation" element={<Workout/>} />
          </Routes>


        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
