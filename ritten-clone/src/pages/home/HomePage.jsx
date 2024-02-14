import React, { Component } from 'react';
import BlogCard from '../../components/blog/BlogCard'
import './HomePage.css'

class HomePage extends Component {
    render() {
        const params = this.props
        const blogs = params.blogs

        return (
            <div className='home-page-container'>
                {
                    blogs.map((blog) => (
                        <BlogCard title={blog.title} body={blog.body} />
                    ))
                }
            </div>
        )
    }
}


export default HomePage;