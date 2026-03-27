import { Link } from 'react-router-dom'

function Home({ posts }) {
  const latestPost = posts[0]

  return (
    <section className="page-shell">
      <div className="hero-grid">
        <article className="hero-card">
          <p className="eyebrow">Home page</p>
          <h2>Welcome to your personal React blog.</h2>
          <p className="page-copy">
            This site lets you move between pages without reloading, publish new
            posts through a controlled form, and manage the post list with React
            state.
          </p>

          <ul className="feature-list">
            <li>Use the Blog page to view every post with its full details.</li>
            <li>Create a new post with title, author, and content fields.</li>
            <li>Delete entries instantly and watch the list update right away.</li>
          </ul>

          <div className="button-row">
            <Link className="action-button" to="/blog">
              Explore Posts
            </Link>
            <Link className="secondary-button" to="/new-post">
              Write a New Post
            </Link>
          </div>
        </article>

        <aside className="spotlight-card">
          <p className="eyebrow">Latest entry</p>
          {latestPost ? (
            <>
              <h3>{latestPost.title}</h3>
              <p className="post-meta">
                <span>By {latestPost.author}</span>
                <span>{latestPost.timestamp}</span>
              </p>
              <p className="page-copy">{latestPost.content}</p>
            </>
          ) : (
            <p className="page-copy">
              No posts have been published yet. Start by creating your first
              story.
            </p>
          )}
        </aside>
      </div>
    </section>
  )
}

export default Home