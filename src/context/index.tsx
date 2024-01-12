import { createContext } from 'react';
import { auth, firestore } from '../firebase';
import App from '../App';

export const Context = createContext({
  auth,
  firestore,
});

const ContextProvider = () => (
  <Context.Provider value={{ auth, firestore }}>
    <App />
  </Context.Provider>
);

export default ContextProvider;
