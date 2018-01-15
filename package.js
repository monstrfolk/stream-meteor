Package.describe({
  name: 'getstream:stream-meteor',
  version: '0.4.4',
  summary: 'Getstream.io integration package for Meteor',
  git: 'https://github.com/GetStream/stream-meteor',
  documentation: 'README.md',
});

Npm.depends({
  'getstream': '3.10.0',
  'fibers': '2.0.0',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('ecmascript');
  api.use(['cosmos:browserify'], 'client');
  api.use(['underscore', 'mongo']);
  api.use('matb33:collection-hooks');
  api.use('dburles:mongo-collection-instances');
  api.use('check');

  api.export('Stream');
  api.addFiles('src/namespace.js');
  api.addFiles('src/client.browserify.js', 'client');
  api.addFiles('src/server/namespace.js', 'server');
  api.addFiles(['config/getstream.js',
    'stream-meteor.js',
    'src/feed-manager.js',
    'src/collections.js',
    'src/activity.js',
    'src/backend.js']);
  api.addFiles('src/server/publish.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('sanjo:jasmine');
  api.use(['underscore', 'mongo']);
  api.use('insecure');
  api.use('accounts-base');
  api.use('getstream:stream-meteor');

  api.addFiles('test/spec.js');
  api.addFiles('test/client/spec.js', ['client']);
  api.addFiles('test/server/spec.js', ['server']);
});
