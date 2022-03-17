import { StyledFooter } from "../../styles/StyledFooter"
import { Flip } from 'react-reveal'

export default function Footer() {
  return (
    <StyledFooter>
      <Flip top cascade>
        <p>
          Made with <span>♡</span> and React by <a href='https://github.com/ArthurVBS' target='_blank' rel='external noreferrer'>Arthur V.B.S.</a>
        </p>
      </Flip>
    </StyledFooter>
  )
}
