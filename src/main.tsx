
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.tsx';
import './index.css';
import { TranslationProvider } from '@/hooks/useTranslation';

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </StrictMode>
);
