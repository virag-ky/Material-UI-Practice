import Grid from '@mui/material/Grid';
import CommonButton from '../../components/common/CommonButton';

const Authentication = () => {
  const buttonStyles = {
    fontSize: '0.875rem',
    fontWeight: 600,
    textTransform: 'capitalize',
    borderRadius: 2.5,
    '&.MuiButton-contained': {
      background: '#009be5',
      '&:hover': {
        background: '#006db3',
      },
    },
    '&.MuiButton-outlined': {
      color: '#fff',
      borderColor: '#fff',
      '&:hover': {
        background: 'transparent',
      },
    },
  };

  return (
    <Grid item xs={8}>
      This is an authentication page.
      <CommonButton sx={buttonStyles} variant="contained">
        Add user
      </CommonButton>
      <CommonButton sx={buttonStyles} variant="outlined">
        Web setup
      </CommonButton>
    </Grid>
  );
};

export default Authentication;
