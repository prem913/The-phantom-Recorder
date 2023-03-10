import { createTheme } from "@mui/material";

export const theme = createTheme({
    spacing: 8,
  
    palette: {
      // success: {
      //   main: 'rgb(34, 154, 22)',
      //   light: 'rgba(84, 214, 44, 0.16)',
      //   dark: '#00ab55',
      // },
      // warning: {
      //   main: 'rgb(183, 129, 3)',
      //   light: 'rgba(255, 193, 7, 0.16)',
      // },
      // error: {
      //   main: 'rgb(183, 33, 54)',
      //   light: 'rgba(255, 72, 66, 0.16)',
      // },
      primary: {
        main: '#A997DF',
      },
      secondary: {
        main: '#c2185b',
      },
      greyColor: {
        main: '#637381',
        dark: 'rgb(99, 115, 129)',
        light: 'rgb(244, 246, 248)',
      },
  
      redColor: {
        main: 'rgba(255, 48, 48, 0.08)',
      },
      blackColor: {
        main: 'rgb(33, 43, 54)',
      },
      whiteColor: {
        main:'#fff'
      }
    },
    typography: {
      fontFamily: ['Inter','sans-serif'].join(','),
      h2: {
        fontSize: '1.5rem',
        fontWeight: 700,
      },
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
      },
      body2: {
        fontSize: '0.',
      },
    },
  });