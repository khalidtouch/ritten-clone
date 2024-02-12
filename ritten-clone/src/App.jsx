import './App.css';
import NewBlogPage from './pages/NewBlogPage';
import HomePage from './pages/HomePage';
import Header from './components/Header'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

function App() {
  return (
    <div className='app-container'>
      <Router>
        <Header />
  
        <Routes>
          <Route path='/blog' element={<NewBlogPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
