Package.describe({
  name: 'ianpogi5:crypto-base',
  summary: 'Base package for CryptoJS, standard secure crypto algorithms KAYWEB',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('crypto.js', ['client', 'server']);
  api.export && api.export('CryptoJS');
});