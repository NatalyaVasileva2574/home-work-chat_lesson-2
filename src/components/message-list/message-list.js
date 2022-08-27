import React, { useState, useEffect } from "react";
import { Message } from "./message";

export const MessageList = () => {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");


//   const sendMessage = () => {
//     if (value) {
//       setMessageList([
//         ...messageList,
//         { author: "userName", message: value },
//       ]);
//       setValue("")
//     }
//   };

//   const handlePressInput = ({ code }) => {
//     if (code === "Enter") {
//       sendMessage();
//     }
//   };

//   useEffect(() => {
//     const lastMessage = messageList[messageList.length - 1];
//     let timeId = null;

//     if (messageList.length && messageList.author === "userName") {
//       timeId = setTimeout(() => {
//         setMessageList([
//           ...MessageList,
//           { autor: "Bot", message: "hello from Bot" }
//         ]);
//       }, 2500);

//       return () => {
//         clearInterval(timeId);
//       };
//     }
//   }, [messageList]);

  return (
    <>
      <div>
        {messageList.map((message) => (
          <Message message={message} />))}
      </div>

      <button onClick={sendMessage}>Send</button>
      <input fullWidth
        placeholder="введите текст"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
      />
    </>
  );
};
