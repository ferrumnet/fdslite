import * as React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './fonts.css';
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const fdsTheme = createTheme ({
  palette: {
    type: 'light',
    primary: {
      main: '#E7B35F',
      contrastText: '#000000',
    },
    secondary: {
      main: '#FFE6B2',
    },
    background: {
      default: '#3d3d3d',
      paper: '#4a4a4a',
    },
    error: {
      main: '#D23232',
    },
    warning: {
      main: '#CF6E1E',
    },
    success: {
      main: '#2E9F57',
    },
    info: {
      main: '#6F767E',
    },
    text: {
      primary: '#ffffff',
      secondary: '#FFE6B2',
    },
    divider: '#33383F',
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontFamily: 'AberMonoRegular',
    },
    h2: {
      fontSize: '2.2rem',
      fontFamily: 'AberMonoRegular',
    },
    h3: {
      fontSize: '2rem',
      fontFamily: 'AberMonoRegular',
    },
    h4: {
      fontSize: '1.5rem',
      fontFamily: 'AberMonoRegular',
    },
    h5: {
      fontSize: '1.2rem',
      fontFamily: 'AberMonoRegular',
    },
    h6: {
      fontSize: '1rem',
      fontFamily: 'AberMonoRegular',
    },
    button: {
      fontSize: '1rem',
      fontFamily: 'AberMonoRegular',
    },
    overline: {
      fontSize: '0.8rem',
      
    },
    body1: {
      fontFamily: 'AberMonoRegular',
    },
    fontFamily: 'AberMonoRegular',
  },  
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={fdsTheme}>
      <CssBaseline>
      <App />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
)
