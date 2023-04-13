import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/LandingPage/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import blogView from './Components/Blogs/blogView';
import AllBlogs from './Components/Blogs/AllBlogs';
import About from './Components/About/About';
import Projects from './Components/projects/Projects';
import Showdet from './Components/Detail/detail';
import { AbcOutlined } from '@mui/icons-material';

function App() {
  return (
<Router>
    <div className="App">
       <div className='headnav'><Navbar/></div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<AllBlogs />} />
      <Route path="/about" element={<About />} />
      <Route path="/detail/:id" element={<Showdet/>} />
      <Route path="/certifications" element={<Projects/>} />
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
