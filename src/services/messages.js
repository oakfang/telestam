import React, { createContext, useContext, useState, useCallback } from 'react';

const MessageCtx = createContext();

export function Provider({ children }) {
  const [messages, setMessages] = useState([]);
  const add = useCallback(
    message => setMessages(messages => [...messages, message]),
    [],
  );
  const ctx = { messages, add };
  return <MessageCtx.Provider value={ctx}>{children}</MessageCtx.Provider>;
}

export const useMessageService = () => useContext(MessageCtx);
