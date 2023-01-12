import Navbar from './components/navbar/Navbar';
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <Grid container className="App">
      <Grid item xs={4}>
        <Navbar />
      </Grid>
      <Outlet />
    </Grid>
  );
};

export default App;
