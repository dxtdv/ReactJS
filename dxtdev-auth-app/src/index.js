import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import "bootstrap/dist/css/bootstrap.min.css"
import GlobalProvider from './contexts/GlobalContext';


ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

