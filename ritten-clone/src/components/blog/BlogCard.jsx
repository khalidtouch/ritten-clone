import React from 'react'
import './BlogCard.css'
import { FavoriteBorderOutlined, BarChartOutlined, InsertCommentOutlined } from '@mui/icons-material'

export default function BlogCard({ title, body }) {
    return (
        <div className='blog-card-container'>
            <div className='blog-card-header'>
                <div className='blog-card-header-avatar'>
                </div>
                <div className='blog-card-header-info'>
                    <div className='blog-card-title'>{title}</div>
                    <div className='blog-card-author'>Khalid Isah</div>
                </div>
            </div>

            <hr className='solid' />
            <div className='blog-card-snippet'>{body}</div>

            <hr className='solid' />
            <div className='blog-card-footer'>
                <div className='blog-card-views-container'>
                    <BarChartOutlined className='blog-card-footer-icon' />
                    <div>230</div>
                </div>
                <button className='blog-card-likes-container'>
                    <FavoriteBorderOutlined className='blog-card-footer-icon' />
                    <div>7</div>
                </button>
                <button className='blog-card-comments-container'>
                    <InsertCommentOutlined className='blog-card-footer-icon' />
                    <div>4</div>
                </button>
            </div>
        </div>
    )
}