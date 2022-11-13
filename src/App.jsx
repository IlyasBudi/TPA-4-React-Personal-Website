import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portofolio from './components/Portofolio'
import Educations from './components/Educations'
import Blog from './components/Blog'
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer'


function App() {

  return (
    <>
      <div className="bg-slate-900 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Navbar />
          <Routes>           
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Education" element={<Educations />} />
            <Route path="/portofolio" element={<Portofolio />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
