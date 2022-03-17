import { StyledSectionOrganization, StyledDivIndex, StyledSectionTestament } from '../../styles/StyledSection'
import { Fade } from 'react-reveal';
import Card from '../card/Card'

export default function Organization() {
  const jsonGroupsData = require('../../Groups.json')

  return (
    <StyledSectionOrganization>
      <StyledDivIndex>
        <a href='#oldTestament'><span>Old</span> Testament</a>
        <span>|</span>
        <a href='#newTestament'><span>New</span> Testament</a>
      </StyledDivIndex>

      <StyledSectionTestament id='oldTestament' color={'secondary'}>
        <Fade left>
          <h1>Old Testament</h1>
        </Fade>

        <Fade bottom>
          {jsonGroupsData['old testament'].map((value, index) => {
            return <Card key={index} testament={value.testament} name={value.group} books={value.books}>{value.description}</Card>
          })}
        </Fade>

      </StyledSectionTestament>
      
      <StyledSectionTestament id='newTestament' color={'primary'}>
        <Fade left>
          <h1>New Testament</h1>
        </Fade>

        <Fade bottom>
          {jsonGroupsData['new testament'].map((value, index) => {
            return <Card key={index} testament={value.testament} name={value.group} books={value.books}>{value.description}</Card>
          })}
        </Fade>

      </StyledSectionTestament>
    </StyledSectionOrganization>
  )
}
