/* eslint-disable no-console */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { ErrorModal } from './common/components/modals/ErrorModal';
import { WaitingModal } from './common/components/modals/modals';

// Render the React app
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ErrorModal />
        <WaitingModal />
        <App />
    </StrictMode>
);
