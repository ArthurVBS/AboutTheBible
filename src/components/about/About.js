import { useEffect } from 'react'
import Aos from 'aos'

import undrawBook from '../../assets/books.png'
import handBible from '../../assets/hand_bible.png'

import { StyledImgBooks, StyledImgHandBible, StyledButton, StyledSection, StyledCard, StyledVerse } from './Styled'

export default function About(props) {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false })
  })

  function handleClick() {
    window.scrollTo(0, 0)
    props.setSidebarOpen(true)
  }

  return (
    <>
      <StyledSection variant="top">
        <StyledCard variant="top" color="primary" data-aos="fade-right">
          <h3>What's the <span>Holy Bible</span>?</h3>

          <p>The Bible is the <span>Word of God</span>, written by people inspired by God. The Bible also serves to guide us, comfort us, correct us, heal us.</p>
          <p>The Bible is a collection of religious texts or <span>scriptures sacred</span> in Christianity. These texts include instructions, stories, poetry, and prophesies, among other genres.</p>
        </StyledCard>

        <StyledImgHandBible src={handBible} alt='Picture' />

        <StyledVerse data-aos="fade-up">
          <i className="fas fa-dove"></i>
          "Then you will know the <span>truth</span>, and the truth will set you free." - <span>John 8:32</span>
        </StyledVerse>

        <StyledCard variant="bottom">
          <h3><span>Old</span> &amp; <span>New</span> Testaments</h3>

          <p>The <span>Old Testament</span> is the first section of the Bible, covering the creation of Earth through Noah and the flood, Moses and more, finishing with the Jews being expelled to Babylon.</p>
          <p>The <span>New Testament</span> tells the story of the life of Jesus and the early days of Christianity, most notably Paul's efforts to spread Jesus' teaching. It collects 27 books, all originally written in Greek.</p>
        </StyledCard>
      </StyledSection>

      <StyledSection variant="bottom">
        <StyledImgBooks src={undrawBook} alt='Picture' />

        <StyledCard variant="top" color="secondary">
          <h3 data-aos="fade-left">What's the <span>Bible</span> about?</h3>

          <p data-aos="fade-up">Essentially, the Bible is about God's plans and purposes for fellowship with people on the earth. <span>God created everything</span>, including people who are made in His image.</p>
          <p data-aos="fade-up">The Bible teaches us about God and how we can have a <span>personal relationship</span> with Him through <span>Jesus</span>.</p>
        </StyledCard>

        <StyledButton onClick={() => window.scrollTo(0, 0)} variant='selected'>
          About <i className="fas fa-chevron-circle-up"></i>
        </StyledButton>

        <StyledButton onClick={() => handleClick()}>
          Organization / Books <i className="fas fa-chevron-circle-right"></i>
        </StyledButton>
      </StyledSection>
    </>
  )
}
