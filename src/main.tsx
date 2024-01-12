import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import ContextProvider from './context/index.tsx';

const rootNode = document.getElementById('root')!;

const root = createRoot(rootNode);

root.render(
  <StrictMode>
    <ContextProvider />
  </StrictMode>
);
