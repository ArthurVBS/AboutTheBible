import { useEffect } from 'react'
import Aos from 'aos'

import undrawBook from '../../assets/undrawBook.svg'
import undrawSearch from '../../assets/undrawSearch.svg'
import undrawQuestion from '../../assets/undrawQuestion.svg'

import {StyledMain, StyledParagraph, StyledSection, StyledCard, StyledVerse } from './Styled'

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false })
  })

  return (
    <StyledMain>
      <StyledSection data-aos="fade-up">
        <StyledCard variant="bottom">
          <img src={undrawQuestion} alt='An art - Question' />
          <h3>What<span>'</span>s the <span>Holy Bible</span>?</h3>
        </StyledCard>

        <StyledParagraph data-aos="fade-left">
          <p>The Bible is the <span>Word of God</span>, written by people inspired by God. The Bible also serves to guide us, comfort us, correct us, heal us.</p>
          <p>The Bible is a collection of religious texts or <span>scriptures sacred</span> in Christianity. These texts include instructions, stories, poetry, and prophesies, among other genres.</p>
        </StyledParagraph>
      </StyledSection>

      <StyledVerse data-aos="fade-right">
        <i className="fas fa-dove"></i>
        "Then you will know the <span>truth</span>, and the truth will set you free." - <span>John 8:32</span>
      </StyledVerse>

      <StyledSection data-aos="fade-up">
        <StyledCard variant="bottom">
          <img src={undrawBook} alt='An art - Book' />
          <h3><span>Old</span> &amp; <span>New</span> Testaments</h3>
        </StyledCard>

        <StyledParagraph data-aos="fade-left">
          <p>The <span>Old Testament</span> is the first section of the Bible, covering the creation of Earth through Noah and the flood, Moses and more, finishing with the Jews being expelled to Babylon.</p>
          <p>The <span>New Testament</span> tells the story of the life of Jesus and the early days of Christianity, most notably Paul's efforts to spread Jesus' teaching. It collects 27 books, all originally written in Greek.</p>
        </StyledParagraph>
      </StyledSection>


      <StyledSection data-aos="fade-up">
        <StyledCard>
          <img src={undrawSearch} alt='An art - Searching' />

          <h3>What<span>'</span>s the <span>Bible</span> about?</h3>
        </StyledCard>

        <StyledParagraph data-aos="fade-left">
          <p>Essentially, the Bible is about God's plans and purposes for fellowship with people on the earth. <span>God created everything</span>, including people who are made in His image.</p>
          <p>The Bible teaches us about God and how we can have a <span>personal relationship</span> with Him through <span>Jesus</span>.</p>
          </StyledParagraph>
      </StyledSection>
    </StyledMain>
  )
}
