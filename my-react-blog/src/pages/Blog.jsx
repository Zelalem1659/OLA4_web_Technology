function Blog({ posts, onDeletePost }) {
  return (
    <section className="page-shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Blog page</p>
          <h2>Post archive</h2>
          <p className="page-copy">
            Every post shows its full title, author, content, and timestamp.
          </p>
        </div>
        <span className="post-count" aria-label="Number of posts">
          {posts.length}
        </span>
      </div>

      <div className="blog-layout">
        <div className="posts-column">
          {posts.length === 0 ? (
            <div className="empty-state">
              <h3>No posts yet</h3>
              <p className="page-copy">
                Add a new post from the New Post page and it will appear here.
              </p>
            </div>
          ) : (
            posts.map((post) => (
              <article className="post-card" key={post.id}>
                <p className="eyebrow">Post details</p>
                <h3>{post.title}</h3>
                <div className="post-meta">
                  <span>Author: {post.author}</span>
                  <span>{post.timestamp}</span>
                </div>
                <p className="post-content">{post.content}</p>
                <div className="button-row">
                  <button
                    className="delete-button"
                    onClick={() => onDeletePost(post.id)}
                    type="button"
                  >
                    Delete Post
                  </button>
                </div>
              </article>
            ))
          )}
        </div>

        <aside className="notes-panel sidebar-column">
          <p className="eyebrow">Actions area</p>
          <h3>How this page works</h3>
          <ul className="tips-list">
            <li>Posts are stored in App state and passed down with props.</li>
            <li>Deleting an item filters it out and updates the UI immediately.</li>
            <li>The archive stays readable on desktop and mobile screens.</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default Blog