document.getElementById('root').innerHTML = 'Basic PWA Example';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
