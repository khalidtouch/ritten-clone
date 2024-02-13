import React, { useEffect } from 'react'

import './Header.css'
import { Toolbar, AppBar, IconButton, Typography } from '@mui/material'
import { MenuButton } from '../Buttons';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header({ hasCompletedBlogCreation }) {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (hasCompletedBlogCreation) navigate(-1) 
    },)

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
                    variant='h3'
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    Ritten
                </Typography>

                <MenuButton
                    pathname={location.pathname}
                />

            </Toolbar>
        </AppBar>
    )
}