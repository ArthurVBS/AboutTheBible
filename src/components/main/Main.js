import About from '../about/About'
import Organization from '../organization/Organization'
import Books from '../books/Books'

export default function Main(props){

  function setMainSection(container){
    if (container === 'about'){
      return <About />
    }
    else if (container === 'organization'){
      return <Organization />
    }
    else if (container === 'books'){
      return <Books />
    }
  }
  
  return(
    setMainSection(props.showContainer)
  )
}