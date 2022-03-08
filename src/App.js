import React, {useState} from 'react'

import Header from './components/header/Header'
import About from './components/about/About'
import Organization from './components/organization/Organization'
import Footer from './components/footer/Footer'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/globalStyles'
import { theme } from './styles/theme'

export default function App() {
  const [showContainer, setShowContainer] = useState('About')

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header showContainer={showContainer} setShowContainer={setShowContainer} />

      {showContainer === 'About' ? <About /> : <Organization />}

      <Footer />
    </ThemeProvider>
  )
}
