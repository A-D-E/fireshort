import React from "react"
import {
  ThemeProvider,
  createMuiTheme,
  useMediaQuery,
  responsiveFontSizes,
} from '@material-ui/core'
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

import App from "./App"
import configureStore from "./configureStore"

const store = configureStore()

function Root() {
  const darkMode = useMediaQuery('(prefers-color-scheme: dark)')
  let theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? 'rgb(48 54 56)' : '#fff',
        paper: darkMode ? 'rgb(48 54 56)' : '#fff',
      },
      primary: {
        main: '#cc0000',
        light: '#ff5f52',
        dark: '#8e0000',
        contrastText: '#fff',
      },
    },
    typography: {
      fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(
        ','
      ),
      useNextVariants: true,
      htmlFontSize: 18,
    },
  })
  theme = responsiveFontSizes(theme)
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ThemeProvider>
  )
}

export default Root
