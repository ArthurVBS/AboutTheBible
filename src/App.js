import {useState} from 'react'

import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/globalStyles'
import { theme } from './styles/theme'

export default function App() {
  const [showContainer, setShowContainer] = useState('organization')

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header showContainer={showContainer} setShowContainer={setShowContainer} />
      <Main showContainer={showContainer} />
      <Footer />
    </ThemeProvider>
  )
}
