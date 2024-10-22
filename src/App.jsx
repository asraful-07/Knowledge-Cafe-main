import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmark from './component/Bookmark/Bookmark'
import Header from './component/Header/Header'

function App() {
  const [bookmark, setBookmark] = useState([])

  const handelToBookmark = blog => {
    const newBookmark = [...bookmark, blog]
    setBookmark(newBookmark)
  }

  return (
    <>
      
    <Header></Header>
    <main className='lg:flex  max-w-7xl mx-auto'>
    <Blogs handelToBookmark={handelToBookmark}></Blogs>

    <Bookmark bookmark={bookmark}></Bookmark>
    </main>
      
    </>
  )
}

export default App
