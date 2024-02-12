import { TextField } from '@mui/material';
import React, { Component } from 'react'
import './NewBlogPage.css'
import { InfinitySpin } from 'react-loader-spinner'

class NewBlogPage extends Component {
    render() {
        const params = this.props
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
                    >
                        {
                            params.isLoading ? (<div className='button-create-blog-content'>
                                <div className='button-create-blog-text'>Create</div>
                                <InfinitySpin className='button-spinner' />
                            </div>) : (<div className='button-create-blog-content'>
                                <div button-create-blog-text>
                                    Create
                                </div>
                            </div>)
                        }
                    </button>
                </div>

            </div>
        )
    }
}

export default NewBlogPage;