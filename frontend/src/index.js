import React from 'react';

import App from './App';

// import ReactDOM from 'react-dom';
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
  <App />
</React.StrictMode>);