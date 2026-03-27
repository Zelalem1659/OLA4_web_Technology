import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar.jsx'
import Blog from './pages/Blog.jsx'
import Home from './pages/Home.jsx'
import NewPost from './pages/NewPost.jsx'

const initialPosts = [
  {
    id: 1,
    title: 'Building a Better Study Rhythm',
    author: 'Ola Johnson',
    content:
      'Breaking large assignments into daily goals helped me stay consistent. Short planning sessions at the start of each week made the rest of my work feel much less chaotic.',
    timestamp: 'March 24, 2026 at 8:30 PM',
  },
  {
    id: 2,
    title: 'Why Small UI Details Matter',
    author: 'Ola Johnson',
    content:
      'A readable layout, clear buttons, and visible feedback can completely change how a site feels. Even simple projects become easier to use when the interface is intentional.',
    timestamp: 'March 25, 2026 at 6:15 PM',
  },
]

function NotFound() {
  return (
    <section className="page-shell not-found-page">
      <p className="eyebrow">Lost in the archive</p>
      <h2>404 - Page Not Found</h2>
      <p className="page-copy">
        The page you requested does not exist. Use the navigation above to return
        to the main blog pages.
      </p>
    </section>
  )
}

function App() {
  const [posts, setPosts] = useState(initialPosts)

  function addPost(postData) {
    const nextPost = {
      id: Date.now(),
      ...postData,
      timestamp: new Date().toLocaleString([], {
        dateStyle: 'long',
        timeStyle: 'short',
      }),
    }

    setPosts((currentPosts) => [nextPost, ...currentPosts])
  }

  function deletePost(postId) {
    setPosts((currentPosts) =>
      currentPosts.filter((post) => post.id !== postId),
    )
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <p className="eyebrow">React Router + useState blog application</p>
        <h1>React Blog Website</h1>
        <p className="page-copy site-intro">
          Create posts, browse the archive, and manage entries with a clean
          multi-page interface.
        </p>
        <Navbar />
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route
            path="/blog"
            element={<Blog posts={posts} onDeletePost={deletePost} />}
          />
          <Route path="/new-post" element={<NewPost onAddPost={addPost} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>Built by Zelalem Tewelde for OLA4 Web Technology, Spring 2026.</p>
      </footer>
    </div>
  )
}

export default App
