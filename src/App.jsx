import { useEffect } from 'react'
import Aos from 'aos'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'
import Hero from './components/UI/Hero'
import Service from './components/UI/Service'
import Portfolio from './components/UI/portfolio'
import Contact from './components/UI/Contact'

// Initialize Firebase

function App() {
useEffect(()=>{
  Aos.init()
},[])
  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <Service/>
      <Portfolio/>
      <Contact/>
    </main>
    <Footer/>
    </>
  )
}

export default App
