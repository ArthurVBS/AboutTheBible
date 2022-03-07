import React from 'react'
import './Organization.css'
import Card from '../card/Card'

export default function Organization() {
  return (
    <section className='sect-Organization'>
      <div className='index'>
        <a href='#oldTestament'><span className='details'>Old</span> Testament</a>
        <span className='bar'>|</span>
        <a href='#newTestament'><span className='details'>New</span> Testament</a>
      </div>

      <section className='testament' id='oldTestament'>
        <h1 className='title'>Old Testament</h1>

        <Card testament='old' name='Pentateuch'
          books={['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy']}
        >
          Description
        </Card>
        <Card testament='old' name='Historical Books'
          books={['Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther']}
        >
          Description
        </Card>
        <Card testament='old' name='Wisdom Literature'
          books={['Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'the Song of Solomon']}
        >
          Description
        </Card>
        <Card testament='old' name='Major Prophets'
          books={['Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel']}
        >
          Description
        </Card>
        <Card testament='old' name='Minor Prophets'
          books={['Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi']}
        >
          Description
        </Card>
      </section>
      
      <section className='testament' id='newTestament'>
        <h1 className='title'>New Testament</h1>

        <Card testament='new' name='Gospels'
          books={['Matthew', 'Mark', 'Luke', 'John']}
        >
          Description
        </Card>
        <Card testament='new' name='Historical Books'
          books={['Acts']}
        >
          Description
        </Card>
        <Card testament='new' name='Paul&#39;s letters'
          books={['Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon']}
        >
          Description
        </Card>
        <Card testament='new' name='General letters'
          books={['James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude']}
        >
          Description
        </Card>
        <Card testament='new' name='Apocalyptic Literature'
          books={['Revelation']}
        >
          Description
        </Card>
      </section>
    </section>
  )
}