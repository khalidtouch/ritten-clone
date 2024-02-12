import { TextField } from '@mui/material';
import React, { Component } from 'react'
import './NewBlogPage.css'

class NewBlogPage extends Component {
    render() {
        return (
            <div className='new-blog-page'>
                <div className='text-field-container'>
                    <TextField
                        className='text-field'
                        variant='outlined'
                        id='blog-title'
                        placeholder='Enter title'
                        label='Title'
                        required
                    ></TextField>
                </div>

                <div className='text-field-container'>
                    <TextField
                        className='text-field'
                        variant='outlined'
                        id='blog-summary'
                        placeholder='Enter summary'
                        label='Summary'
                        multiline
                        maxRows={3}
                    ></TextField>
                </div>

                <div className='text-field-container'>
                    <TextField
                        className='text-field'
                        variant='outlined'
                        id='blog-content'
                        placeholder='Write something...'
                        multiline
                        required
                        rows={16}
                        maxRows={32}
                    ></TextField>
                </div>

                <div className='button-create-blog-container'>
                    <button className='button-create-blog'
                        variant='Contained'
                        size='large'
                        onClick={() => { }}
                    >Create</button>
                </div>

            </div>
        )
    }
}

export default NewBlogPage;