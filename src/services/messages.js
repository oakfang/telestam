import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import Coven from 'coven';

import { username } from 'services/username';

const coven = new Coven({ signaling: "wss://coven-broker.herokuapp.com" });

const MessageCtx = createContext();

export function Provider({ children }) {
  const [messages, setMessages] = useState([]);
  const push = useCallback(
    message => setMessages(messages => [...messages, message]),
    [],
  );
  const add = useCallback(
    message => {
      push(message);
      coven.broadcast({ ...message, username });
    },
    [push],
  );
  useEffect(() => {
    const handler = ({ message }) => push(message);
    coven.on('message', handler);
    return () => coven.off('message', handler);
  }, [push]);
  const ctx = { messages, push, add };
  return <MessageCtx.Provider value={ctx}>{children}</MessageCtx.Provider>;
}

export const useMessageService = () => useContext(MessageCtx);
