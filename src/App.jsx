import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import BookDetail from './components/BookDetail'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-stone-950">
      <Navbar />
      <Hero />
      <About />
      <BookDetail />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default App