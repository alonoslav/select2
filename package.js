Package.describe({
  name: 'alonoslav:select2',
  version: '0.0.1',
  summary: 'Select 2 for Pages theme',
  git: 'https://github.com/alonoslav/select2.git',
  documentation: 'README.md',
});

// eslint-disable-next-line func-names, prefer-arrow-callback
Package.onUse(function (api) {
  api.versionsFrom('1.3');

  api.use([
    'ecmascript',
    'jquery',
  ], 'client');

  api.addFiles([
    'select2.css',
    'select2-bootstrap.css',
  ], 'client');

  api.mainModule('select2.js', 'client');
});
