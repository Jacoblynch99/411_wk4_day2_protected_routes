import React, { useState } from 'react';
import Navigation from './components/Navigation'
import './App.css'
import Router from './Router'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
  let [prefersDarkMode, setMode] = useState(true)

    const toggleDarkMode = () => {
        setMode(prefersDarkMode === false ? true : false)
    }

    const theme = createMuiTheme({
        palette: {
            type: prefersDarkMode ? 'dark' : 'light',
            primary: {
                main: prefersDarkMode ? '#af52bf' : '#3f50b5',
                contrastText: prefersDarkMode ? '#000' : '#fff',
            },
        },
    })

  return (
    <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Navigation darkMode={toggleDarkMode} />
                <CssBaseline />
                <Router />
            </ThemeProvider>
        </BrowserRouter>
  );
}

export default App;
