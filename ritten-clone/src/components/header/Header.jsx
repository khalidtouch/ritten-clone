import React from 'react'

import './Header.css'
import { Toolbar, AppBar, IconButton, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()

    return (
        <AppBar position='static'>
            <Toolbar className='header-toolbar'>
                <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    sx={{ mr: 2 }}
                >

                </IconButton>


                <Typography
                    variant='h6'
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    Ritten
                </Typography>

                <Button color='inherit' onClick={() => navigate('blog')}>Create</Button>

            </Toolbar>
        </AppBar>
    )
}