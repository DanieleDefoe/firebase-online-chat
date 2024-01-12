import { useContext, useState } from 'react';
import { Context } from '../context';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Box, Button, Container, Grid, TextField } from '@mui/material';
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import Loader from './Loader';
import Message from './Message';
import { IMessage } from '../types';

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');

  const messagesRef = collection(firestore, 'messages');
  const q = query(messagesRef, orderBy('createdAt'));
  const [messages, loading] = useCollectionData(q);

  const sendMessage = async () => {
    const body: IMessage = {
      uid: user!.uid,
      displayName: user!.displayName!,
      photoURL: user!.photoURL!,
      text: value,
      createdAt: serverTimestamp(),
    };
    addDoc(collection(firestore, 'messages'), body);

    setValue('');
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Grid
        container
        sx={{ height: 'calc(100vh - 74px)', mt: '10px' }}
        justifyContent="center"
      >
        <Box
          sx={{
            width: '80%',
            height: '70vh',
            border: '1px solid gray',
            overflowY: 'auto',
            display: 'grid',
            gap: '10px',
            p: 2,
          }}
        >
          {messages?.map((message) => {
            return <Message {...(message as IMessage)} key={Math.random()} />;
          })}
        </Box>
        <Grid
          container
          direction="column"
          alignItems="flex-end"
          style={{ width: '80%' }}
          gap={1}
        >
          <TextField
            fullWidth
            maxRows={2}
            variant="outlined"
            value={value ?? ''}
            onChange={(event) => setValue(event.target.value)}
          />
          <Button onClick={sendMessage} variant="outlined" color="success">
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
