import React, { useState } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import GlobalStyles from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/theme'

export default function App() {
  const [showContainer, setShowContainer] = useState('about')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isDarkTheme , setIsDarkTheme] = useState(false)

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header
        showContainer={showContainer} setShowContainer={setShowContainer}
        sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}
        isDarkTheme = {isDarkTheme} setIsDarkTheme={setIsDarkTheme}
      />
      <Main
        showContainer={showContainer}
        sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}
      />
      <Footer />
    </ThemeProvider>
  )
}
