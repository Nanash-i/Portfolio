import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Projects from './section/Projects'
import Contact from './section/Contact'
import Experience  from './section/Experience'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto '>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}

export default App