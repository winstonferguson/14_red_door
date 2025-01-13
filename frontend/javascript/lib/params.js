const captureParams = () => {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);

  return params;
}

const captureAndCleanParams = () => {
  cleanParams();

  return captureParams();
}

const cleanParams = () => {
  const url = new URL(window.location.href);

  window.history.replaceState(null, document.title, url.pathname); 
}

export { captureParams, captureAndCleanParams, cleanParams }