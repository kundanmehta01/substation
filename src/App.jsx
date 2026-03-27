import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import CEOVision from './components/CEOVision'
import Footer from './components/Footer'
import CEODetails from './pages/CEODetails'
import AllProjects from './pages/AllProjects'
import ProjectDetails from './pages/ProjectDetails'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <CEOVision />
    </>
  )
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ketan-gandhi" element={<CEODetails />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
