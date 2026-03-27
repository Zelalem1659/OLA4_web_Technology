import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const emptyForm = {
  title: '',
  author: '',
  content: '',
}

function NewPost({ onAddPost }) {
  const [formData, setFormData] = useState(emptyForm)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const navigate = useNavigate()

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const title = formData.title.trim()
    const author = formData.author.trim()
    const content = formData.content.trim()

    if (!title || !author || !content) {
      setSuccessMessage('')
      setErrorMessage('Please complete the title, author, and content fields.')
      return
    }

    onAddPost({ title, author, content })
    setFormData(emptyForm)
    setErrorMessage('')
    setSuccessMessage('Post submitted successfully. Redirecting to the blog page...')

    window.setTimeout(() => {
      navigate('/blog')
    }, 600)
  }

  return (
    <section className="page-shell">
      <div>
        <p className="eyebrow">New Post page</p>
        <h2>Create a new blog post</h2>
        <p className="page-copy">
          Fill in all fields below. The post will be added to the shared list and
          displayed on the Blog page after submission.
        </p>
      </div>

      <div className="form-layout">
        <div className="form-panel">
          <form className="post-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                onChange={handleChange}
                placeholder="Enter a blog title"
                type="text"
                value={formData.title}
              />
            </div>

            <div className="form-field">
              <label htmlFor="author">Author</label>
              <input
                id="author"
                name="author"
                onChange={handleChange}
                placeholder="Enter the author's name"
                type="text"
                value={formData.author}
              />
            </div>

            <div className="form-field">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                name="content"
                onChange={handleChange}
                placeholder="Write the full blog post content"
                value={formData.content}
              />
            </div>

            {errorMessage ? <p className="error-banner">{errorMessage}</p> : null}
            {successMessage ? <p className="success-banner">{successMessage}</p> : null}

            <div className="button-row">
              <button className="action-button" type="submit">
                Submit Post
              </button>
            </div>
          </form>
        </div>

        <aside className="notes-panel">
          <p className="eyebrow">Form notes</p>
          <h3>Validation checklist</h3>
          <ul className="tips-list">
            <li>Each field is controlled with useState.</li>
            <li>Blank submissions are blocked with an error message.</li>
            <li>Successful submissions are added to App state through props.</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default NewPost