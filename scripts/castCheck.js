window['__onGCastApiAvailable'] = function(loaded, errorInfo) {
  if (loaded) {
    document.querySelector('.castCheck').textContent =
      'このブラウザにはGoogle Castがインストールされているので大丈夫です．';
  } else {
    console.error(errorInfo);
  }
}
