import { Workbox } from 'workbox-window';

const swRegister = () => {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('sw.js');
    wb.register();
    return;
  }
  console.log('Service worker not supported in this browser');
};

export default swRegister;
