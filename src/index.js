// import React from 'react';
// import React, { useState } from 'react';
// import { FunctionComponent, ClassComponent } from './example'
// import styles from "./index.module.css";
import { MessageList } from './components';
import ReactDOM from 'react-dom/client';




const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return <MessageList />;
};

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);





