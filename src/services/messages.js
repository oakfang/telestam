import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

import { useCoven } from 'services/coven';
import { username } from 'services/username';
import { COVEN_BROKER } from 'config';

const MessageCtx = createContext();

export function Provider({ children }) {
  const coven = useCoven(COVEN_BROKER);
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
    [push, coven],
  );
  useEffect(() => {
    const handler = ({ message }) => push(message);
    coven.on('message', handler);
    return () => coven.off('message', handler);
  }, [push, coven]);
  const ctx = { messages, add };
  return <MessageCtx.Provider value={ctx}>{children}</MessageCtx.Provider>;
}

export const useMessageService = () => useContext(MessageCtx);
