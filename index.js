const {store, reducerRegistry} = require('@devly/devly-store');

reducerRegistry.register('shell', require('./reducers'));
