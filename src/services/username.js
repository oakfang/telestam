import Haikunator from 'haikunator';

const haikunator = new Haikunator();
export const username = haikunator.haikunate({ tokenLength: 0, delimiter: '' });
