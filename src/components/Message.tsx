import { Avatar, Box, Grid, Typography } from '@mui/material';
import { useContext, type FC } from 'react';
import type { IMessage } from '../types';
import { Context } from '../context';
import { useAuthState } from 'react-firebase-hooks/auth';

const Message: FC<IMessage> = ({ displayName, photoURL, text, uid }) => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  const isAuthor = user?.uid === uid;

  return (
    <Box
      p={2}
      border={isAuthor ? '2px solid green' : '2px dashed red'}
      borderRadius="5px"
      width="max-content"
      maxWidth="600px"
      justifySelf={isAuthor ? 'flex-end' : 'flex-start'}
      display="grid"
      textAlign={isAuthor ? 'end' : 'start'}
      gap={1}
    >
      <Grid
        container
        gap={1}
        width="max-content"
        justifySelf={isAuthor ? 'flex-end' : 'flex-start'}
      >
        <Avatar src={photoURL} />
        <Typography variant="h6">{displayName}</Typography>
      </Grid>
      <Typography variant="subtitle1" width="100%" noWrap>
        {text}
      </Typography>
    </Box>
  );
};

export default Message;
