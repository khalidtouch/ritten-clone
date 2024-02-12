import React from 'react'

import { Toolbar, AppBar, IconButton, Typography, Button } from '@mui/material'

export default function Header() {
    return (
        <AppBar position='static'>
            <Toolbar>
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
                    Ritten Blog Clone
                </Typography>

                <Button color='inherit'>Create</Button>

            </Toolbar>
        </AppBar>
    )
}