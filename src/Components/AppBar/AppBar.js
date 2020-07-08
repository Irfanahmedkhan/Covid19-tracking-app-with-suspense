import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
// import {Menu, AccountCircle} from '@material-ui/icons'


function AppBar() {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton color='inherit' edge='start' aria-label='menu'>
                        <Menu />
                    </IconButton>
                    <Typography variant='h6' style={{flexGrow : 1}}>
Irfan AHmed 
                    </Typography>
                    <Button color='inherit'>
Login
                    </Button>
                    <Button color='inherit'>
Register
                    </Button>
                    <IconButton color='inherit' aria-label='account'>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default AppBar
