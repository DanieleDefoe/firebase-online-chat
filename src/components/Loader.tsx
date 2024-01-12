import { CircularProgress, Container, Grid } from '@mui/material';

const Loader = () => {
  return (
    <Container>
      <Grid
        container
        style={{ height: 'calc(100vh - 64px)' }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid container alignItems="center" direction="column">
          <CircularProgress color="success" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;
