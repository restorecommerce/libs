import { facade } from './facade';

facade.start();
process.on('SIGINT', function() {
  process.exit();
});
