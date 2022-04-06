import React from 'react'

import About from '../About'
import Organization from '../Organization'
import Books from '../Books'

export default function Main(props) {
  const setMainSection = (container) => {
    if (container === 'about') {
      return <About />
    }
    else if (container === 'organization') {
      return <Organization />
    }
    else if (container === 'books') {
      return <Books />
    }
  }

  return setMainSection(props.showContainer)
}
