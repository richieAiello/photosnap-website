import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ContextProvider } from './context/Context';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import App from './App';
import './index.css';
import './styles/nav.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>
);
