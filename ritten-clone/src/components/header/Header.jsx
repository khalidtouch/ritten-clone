import React from 'react'

import './Header.css'
import { Toolbar, AppBar, IconButton, Typography } from '@mui/material'
import { MenuButton } from '../Buttons';
import { useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation()
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