import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmark from './component/Bookmark/Bookmark'
import Header from './component/Header/Header'

function App() {
  const [bookmark, setBookmark] = useState([])
  const [readingBook, setReadingBook] = useState(0)

  const handelToRead = time => {
 const newReadingBook = readingBook + time
    setReadingBook(newReadingBook)
    console.log('hello', time)
  }

  const handelToBookmark = blog => {
    const newBookmark = [...bookmark, blog]
    setBookmark(newBookmark)
  }

  return (
    <>
      
    <Header></Header>
    <main className='lg:flex  max-w-7xl mx-auto'>
    <Blogs handelToRead ={handelToRead} handelToBookmark={handelToBookmark}></Blogs>

    <Bookmark bookmark={bookmark} readingBook={readingBook}></Bookmark>
    </main>
      
    </>
  )
}

export default App
