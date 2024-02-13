import { TextField } from '@mui/material';
import React, { Component } from 'react'
import './NewBlogPage.css'
import { InfinitySpin } from 'react-loader-spinner'

class NewBlogPage extends Component {
    render() {
        const params = this.props
        const title = params.title
        const summary = params.summary
        const content = params.content
        const onChangeTitle = params.onChangeTitle
        const onChangeSummary = params.onChangeSummary
        const onChangeContent = params.onChangeContent
        const onCreate = params.onCreate

        return (
            <form className='new-blog-page' onSubmit={(event) => onCreate(event)}>
                <div className='text-field-container'>
                    <TextField
                        className='text-field'
                        variant='outlined'
                        id='blog-title'
                        placeholder='Enter title'
                        label='Title'
                        value={title}
                        onChange={(event) => onChangeTitle(event)}
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
                        value={summary}
                        onChange={(event) => onChangeSummary(event)}
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
                        value={content}
                        onChange={(event) => onChangeContent(event)}
                    ></TextField>
                </div>

                <div className='button-create-blog-container'>
                    <button className='button-create-blog'
                        variant='Contained'
                        size='large'
                        type='submit'
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

            </form>
        )
    }
}

export default NewBlogPage;