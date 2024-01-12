import { useContext } from 'react';
import { Box, Button, Container, Grid } from '@mui/material';
import { Context } from '../context';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: 'calc(100vh - 64px)' }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          container
          sx={{ width: 400, bgcolor: 'lightgray' }}
          alignItems="center"
          direction="column"
        >
          <Box p={5}>
            <Button onClick={login} variant="outlined" color="success">
              Войти с помощью Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
