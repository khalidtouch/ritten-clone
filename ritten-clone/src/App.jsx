import './App.css';
import NewBlogPage from './pages/new/NewBlogPage';
import HomePage from './pages/home/HomePage';
import Header from './components/header/Header'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

const jsonPlaceholderBaseUrl = "https://jsonplaceholder.typicode.com"

function App() {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [completedCreateBlog, setCompletedCreateBlog] = useState(false)
  const [blogs, setBlogs] = useState([]);

  const showToast = (message) => toast(message)

  const onCreateBlog = async (event) => {
    event.preventDefault();

    try {
      setLoading(true)
      const response = await fetch(`${jsonPlaceholderBaseUrl}/posts`, {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const newBlog = await response.json()
      setBlogs([newBlog, ...blogs])
      setTitle('')
      setSummary('')
      setContent('')
      setLoading(false)
      setCompletedCreateBlog(true)
      showToast('Blog created successfully!')
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className='app-container'>
      <Router>
        <Header hasCompletedBlogCreation={completedCreateBlog} />
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={true}
          closeOnClick
        />

        <Routes>
          <Route path='/blog' element={
            <NewBlogPage
              isLoading={isLoading}
              title={title}
              summary={summary}
              content={content}
              onChangeTitle={(event) => setTitle(event.target.value)}
              onChangeSummary={(event) => setSummary(event.target.value)}
              onChangeContent={(event) => setContent(event.target.value)}
              onCreate={(event) => onCreateBlog(event)}
            />
          }
          />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
