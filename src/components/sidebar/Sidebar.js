import './Sidebar.css'

export default function Sidebar(props){
  function setSelected(id){
    let buttonItems = document.querySelectorAll('.buttonItem')
    let buttonSelected = document.getElementById(id)

    buttonItems.forEach((item) => (
      item.classList.remove('selected')
    ))

    buttonSelected.classList.add('selected')
  }

  function handleClick(name){
    props.setShowContainer(name)

    setSelected(name)
  }

  return(
    <>
      <nav
        className={`navigation ${props.sidebarOpen === true ? 'activate' : 'disable'}`} 
        onClick={() => {props.setSidebarOpen(!props.sidebarOpen)}}
      >
        <div className='buttonWrapper'>
          <button id='about' className='buttonItem' onClick={() => handleClick('about')}>About</button>
          <button id='organization' className='buttonItem selected' onClick={() => handleClick('organization')}>Organization</button>
          <button id='books' className='buttonItem' onClick={() => handleClick('books')}>Books</button>
        </div>

        <div className='linkWrapper'>
          <a href='https://github.com/ArthurVBS/AboutTheBible' target='_blank' rel='external noreferrer' className='linkItem'>
            <i className="fab fa-github"></i>
          </a>

          <a href='https://www.linkedin.com/in/arthurvbs/' target='_blank' rel='external noreferrer' className='linkItem'>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </nav>
    </>
  )
}
