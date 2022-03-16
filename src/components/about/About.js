import undrawBook from '../../assets/books.png'
import handBible from '../../assets/hand_bible.png'
import { StyledButtonAbout } from '../../styles/StyledButton-About'
import { StyledDivAboutTop, StyledDivAboutCenter } from '../../styles/StyledDiv-About'
import { StyledCardAboutTop, StyledCardAboutCenter, StyledCardAboutBottom } from '../../styles/StyledCard-About'
import { StyledImgBooks, StyledImgHandBible } from '../../styles/StyledImg'

export default function About(props) {
  return (
    <section>
      <StyledCardAboutTop>
        <StyledDivAboutTop>
          <h1>About The Bible</h1>
          <h4><i className="fas fa-dove"></i> "Then you will know the truth, and the truth will set you free." - John 8:32</h4>
        </StyledDivAboutTop>

        <StyledImgHandBible src={handBible} alt='Picture' />
      </StyledCardAboutTop>


      <StyledCardAboutCenter>
        <StyledImgBooks src={undrawBook} alt='Picture' />

        <StyledDivAboutCenter>
          <h3>... Soon</h3>
        </StyledDivAboutCenter>
      </StyledCardAboutCenter>


      <StyledCardAboutBottom>
        <StyledButtonAbout onClick={() => {window.scrollTo(0, 0)}} variant='selected'>
          About <i className="fas fa-chevron-circle-up"></i>
        </StyledButtonAbout>

        <StyledButtonAbout onClick={() => {window.scrollTo(0, 0)
          props.setSidebarOpen(!props.sidebarOpen)
        }}>
          Organization / Books <i className="fas fa-chevron-circle-right"></i>
        </StyledButtonAbout>
      </StyledCardAboutBottom>
    </section>
  )
}
