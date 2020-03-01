import produce from 'immer';
import create from 'zustand';
import Coven from 'coven';

import { username } from 'services/username';

const coven = new Coven({ signaling: 'wss://coven-broker.now.sh' });

const immer = config => (set, get, api) =>
  config(fn => set(produce(fn)), get, api);

export const [useMessageService, messageAPI] = create(
  immer(set => ({
    messages: [],
    add: message =>
      set(({ messages }) => {
        messages.push(message);
        coven.broadcast({ ...message, username });
      }),
    push: message =>
      set(({ messages }) => {
        messages.push(message);
      }),
  })),
);

const { push } = messageAPI.getState();
coven.on('message', ({ message }) => push(message));
