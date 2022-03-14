import { StyledSectionOrganization, StyledDivIndex, StyledSectionTestament } from '../../styles/StyledSection'
import Card from '../card/Card'

export default function Organization() {
  return (
    <StyledSectionOrganization>
      <StyledDivIndex>
        <a href='#oldTestament'><span>Old</span> Testament</a>
        <span>|</span>
        <a href='#newTestament'><span>New</span> Testament</a>
      </StyledDivIndex>

      <StyledSectionTestament id='oldTestament' color={'secondary'}>
        <h1>Old Testament</h1>

        <Card testament='old' name='Pentateuch' books={['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy']}>
          The Pentateuch is composed of the first 5 books of the Bible. These are part of the Torah, the Book of the Law for the Jews. All are arranged in chronological order.
        </Card>

        <Card testament='old' name='Historical Books' books={['Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther']}>
          This set consists of 12 books that tell the story of the people of Israel from the conquest of the Promised Land to the Babylonian exile. The 12 books are also in chronological order.
        </Card>

        <Card testament='old' name='Wisdom Literature' books={['Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'the Song of Solomon']}>
          They are poetry, wisdom, proverbs and songs. 5 books are part of this group.
        </Card>

        <Card testament='old' name='Major Prophets' books={['Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel']}>
          The prophetic books - Major Prophets and Minor Prophets - are records of the prophets about the People of Israel.
        </Card>

        <Card testament='old' name='Minor Prophets' books={['Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi']}>
          The books of the minor prophets have fewer chapters than the books of the major prophets.
        </Card>
      </StyledSectionTestament>
      
      <StyledSectionTestament id='newTestament' color={'primary'}>
        <h1>New Testament</h1>

        <Card testament='new' name='Gospels' books={['Matthew', 'Mark', 'Luke', 'John']}>
          The 4 Gospels recount the birth, ministry, death, resurrection and ascension of Jesus.
        </Card>

        <Card testament='new' name='Historical Books' books={['Acts']}>
          It consists of only one historical book. The book deals with the implementation of the Early Church after the outpouring of the Holy Spirit and the spread of the Gospel.
        </Card>

        <Card testament='new' name='Paul&#39;s letters' books={['Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon']}>
          They are apostolic letters addressed to the first scattered churches in the ancient world. All cards are arranged chronologically.
        </Card>

        <Card testament='new' name='General letters' books={['James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude']}>
        Letters written by other apostles. Also organized chronologically, in addition to talking about the first churches scattered around the world.
        </Card>

        <Card testament='new' name='Apocalyptic Literature' books={['Revelation']}>
          Revelation of Jesus&#39; return.
        </Card>
      </StyledSectionTestament>
    </StyledSectionOrganization>
  )
}
