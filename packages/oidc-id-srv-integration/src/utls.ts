import generate from 'nanoid/generate';

export const nanoid = (): string => {
  return generate('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-', 21);
};

export const epochTime = () => {
  return Math.floor(Date.now() / 1000);
};
