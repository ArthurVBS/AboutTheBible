import React, {useState} from 'react'
import './App.css'
import Header from './components/header/Header'
import About from './components/about/About'
import Organization from './components/organization/Organization'
import Footer from './components/footer/Footer'

export default function App() {
  const [showContainer, setShowContainer] = useState('About')

  return (
    <>
      <Header showContainer={showContainer} setShowContainer={setShowContainer} />
      {showContainer === 'About' ? <About /> : <Organization />}
      <Footer />
    </>
  )
}
