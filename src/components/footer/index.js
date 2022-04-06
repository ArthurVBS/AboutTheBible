import React from 'react'
import { Container, Text, WrapperLink, Link, Button } from "./styled"

export default function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Container>
      <Text>
        Made with <span>♡</span> and React by <a href='https://github.com/ArthurVBS' target='_blank' rel='external noreferrer'>Arthur V.B.S.</a>
      </Text>

      <WrapperLink>
        <Link href='https://github.com/ArthurVBS/AboutTheBible' target='_blank' rel='external noreferrer'>
          GitHub
        </Link>

        <Link href='https://www.linkedin.com/in/arthurvbs/' target='_blank' rel='external noreferrer'>
          Linkedin
        </Link>

        <Button onClick={() => handleClick()}>
          <i className="fas fa-angle-up"></i>
        </Button>
      </WrapperLink>
    </Container>
  )
}
