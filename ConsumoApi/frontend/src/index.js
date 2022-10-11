import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Personagens from './components/Personangens';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Personagens />
  </StrictMode>
);
