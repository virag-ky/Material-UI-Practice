import { createTheme } from '@mui/material/styles';

export const dashboardTheme = createTheme({
  components: {
    // Name of the component
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          fontWeight: 600,
          borderRadius: 8.5,
          '&.MuiButton-contained': {
            backgroundColor: '#009be5',
            '&:hover': {
              backgroundColor: '#006db3',
            },
          },
          '&.MuiButton-outlined': {
            color: '#fff',
            borderColor: '#fff',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
    },
  },
});
