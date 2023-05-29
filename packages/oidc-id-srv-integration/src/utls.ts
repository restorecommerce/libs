import { customAlphabet } from 'nanoid';

export const nanoid = (): string => {
  return customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-', 21)();
};

export const epochTime = () => {
  return Math.floor(Date.now() / 1000);
};
