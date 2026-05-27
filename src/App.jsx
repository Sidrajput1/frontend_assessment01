import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import WhyWistle from './components/whywhistle/WhyWistle'
import FAQ from './components/faq/FAQ'
import ResultsSide from './components/results/ResultsSide'

function App() {
  

  return (
    <>
     <WhyWistle/>
     <ResultsSide/>
     <FAQ/>
    </>
  )
}

export default App
