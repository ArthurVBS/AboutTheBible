import { useState } from 'react'
import { StyledSidebar, StyledButtonContainer, StyledButton, StyledLinkContainer, StyledLink } from '../../styles/StyledSidebar'

export default function Sidebar(props){
  const [buttons, setButtons] = useState({'about': false, 'organization': true, 'books': false})

  function handleClick(name){
    props.setShowContainer(name)

    if (name === 'about'){
      setButtons({'about' : true, 'organization': false, 'books': false})
    }
    else if (name === 'organization'){
      setButtons({'about' : false, 'organization': true, 'books': false})
    }
    else if (name === 'books'){
      setButtons({'about' : false, 'organization': false, 'books': true})
    }
  }

  return(
    <StyledSidebar isOpen={props.sidebarOpen} onClick={() => {props.setSidebarOpen(!props.sidebarOpen)}}>
      <StyledButtonContainer>
        <StyledButton isSelected={buttons.about} onClick={() => handleClick('about')}>About</StyledButton>

        <StyledButton isSelected={buttons.organization} onClick={() => handleClick('organization')}>Organization</StyledButton>

        <StyledButton isSelected={buttons.books} onClick={() => handleClick('books')}>Books</StyledButton>
      </StyledButtonContainer>

      <StyledLinkContainer>
        <StyledLink href='https://github.com/ArthurVBS/AboutTheBible' target='_blank' rel='external noreferrer'>
          <i className="fab fa-github"></i>
        </StyledLink>

        <StyledLink href='https://www.linkedin.com/in/arthurvbs/' target='_blank' rel='external noreferrer'>
          <i className="fab fa-linkedin"></i>
        </StyledLink>
      </StyledLinkContainer>
    </StyledSidebar>
  )
}
