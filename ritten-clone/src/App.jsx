import './App.css';
import NewBlogPage from './pages/new/NewBlogPage';
import HomePage from './pages/home/HomePage';
import Header from './components/header/Header'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

function App() {
  return (
    <div className='app-container'>
      <Router>
        <Header />

        <Routes>
          <Route path='/blog' element={<NewBlogPage isLoading='true' />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
