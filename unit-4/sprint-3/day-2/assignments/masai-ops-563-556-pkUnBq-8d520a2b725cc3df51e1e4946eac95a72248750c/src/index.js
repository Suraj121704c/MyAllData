import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthContextProvider from './Context/AuthContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <AuthContextProvider>
      <App />
      </AuthContextProvider>
);



