const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault()
  butInstall.style.visibility = 'visible';

});

butInstall.addEventListener('click', async () => {
  window.prompt()
  butInstall.style.visibility = 'hidden';
  butInstall.setAttribute('disabled', true);
});

window.addEventListener('appinstalled', (event) => {
  console.log('App installed');
});
