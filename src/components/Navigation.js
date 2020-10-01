import React from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import Brightness4Icon from '@material-ui/icons/Brightness4'

const Navigation = (props) => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    FakeCars.com
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-list-item"
                        onClick={() => {
                            document.cookie = "loggedIn="
                            window.location.replace("/login")
                        }}>
                        Logout
                    </li>
                    <li>
                        <IconButton
                            onClick={props.darkMode}
                            color="inherit"
                            className="nav-list-item"
                        >
                            <Brightness4Icon color="inherit" />
                        </IconButton>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation