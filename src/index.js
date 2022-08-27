import React from 'react';
// import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import { FunctionComponent, ClassComponent } from './example'
import styles from "./index.module.css";
import {MessageList} from './components';


const Message2 = ({ message }) => {
  return (
    <div className={styles.test}>
      <h1 className={styles.fontSizeNameClassComponent}>Message</h1>
      <p className={styles.fontSizeText}>{message}</p>
    </div>
  );
};

const message = "Hello, react!!!";

const App2 = () => {
  return <Message2 message={message} />;
};



// function FunctionComponent() {
//   const [messageList, setMessageList] = useState([
//     { text: "textMessage", author: "userName" }]);

//   const [value, setValue] = useState("");

//   return (
//     <div>
//       <input className={styles.formPadding} value={value} onChange={e => setValue(e.target.value)} />
//     </div >
//   );
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2 />
    {/* <FunctionComponent /> */}
  </React.StrictMode>
);





