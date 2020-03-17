import { createMuiTheme } from '@material-ui/core/styles'
// import purple from '@material-ui/core/colors/purple'
// import green from '@material-ui/core/colors/green'

// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=546E7A&secondary.color=FF7043&secondary.text.color=000000
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '##819ca9',
      main: '#546e7a',
      dark: '#29434e',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ffa270',
      main: '#ff7043',
      dark: '#c63f17',
      contrastText: '#000'
    }
  }
})

export default theme
