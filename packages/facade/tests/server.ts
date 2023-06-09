import { facade } from './facade.js';

facade.start();
process.on('SIGINT', () => {
  process.exit();
});
