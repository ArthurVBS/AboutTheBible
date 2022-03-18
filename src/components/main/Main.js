import About from '../About/About'
import Organization from '../Organization/Organization'
import Books from '../Books/Books'

export default function Main(props){

  function setMainSection(container){
    if (container === 'about'){
      return <About sidebarOpen={props.sidebarOpen} setSidebarOpen={props.setSidebarOpen}/>
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
