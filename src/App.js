import {useState} from 'react'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/globalStyles'
import { theme } from './styles/theme'

export default function App() {
  const [showContainer, setShowContainer] = useState('about')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header
        showContainer={showContainer} setShowContainer={setShowContainer}
        sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}
      />
      <Main
        showContainer={showContainer}
        sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}
      />
      <Footer />
    </ThemeProvider>
  )
}
