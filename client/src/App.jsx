import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './components/navbar'
import CreateSkillsPage from './pages/createSkillPage'
import EditPage from './pages/EditPage'
import SkillDetails from './components/SkillDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<CreateSkillsPage/>}/>
        <Route path="/edit/:id" element={<EditPage/>}/>
        <Route path="/skills/:id" element={<SkillDetails/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;