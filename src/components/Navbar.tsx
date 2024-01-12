import { AppBar, Toolbar, Button, Grid } from '@mui/material';
import { useContext } from 'react';
import { Context } from '../context';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <AppBar color="success" position="static">
      <Toolbar>
        <Grid container justifyContent={'flex-end'}>
          {user ? (
            <Button
              onClick={() => auth.signOut()}
              variant="outlined"
              color="inherit"
            >
              Logout
            </Button>
          ) : (
            <Button variant="outlined" color="inherit">
              Login
            </Button>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
