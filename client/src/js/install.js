const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event
  butInstall.removeAttribute('hidden');

});

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  // Show prompt
  promptEvent.prompt();

  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  butInstall.setAttribute('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  console.log('App installed');
  window.deferredPrompt = null;
});
