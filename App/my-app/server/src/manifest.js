import Confidence from 'confidence';
import Config from 'config';
import plugins from '@cube/cube-base-api';

const internals = {
  criteria: {
    env: process.env.NODE_ENV,
  },
};

internals.manifest = {
  server: {
    connections: {
      router: {
        stripTrailingSlash: true,
        isCaseSensitive: false,
      },
      routes: {
        security: true,
        state: {
          parse: true,
          failAction: 'ignore',
        },
      },
    },
  },
  connections: [
    {
      port: Config.get('server.port'),
      host: Config.get('server.host'),
      labels: ['api'],
    },
  ],
  registrations: [
    ...plugins,
    // Static file and directory handlers
    {
      plugin: './app/staticFiles/routes',
    },
    // Cube Demo
    {
      plugin: './app/demo/routes',
    },
    // users
    {
      plugin: './app/users/routes',
    },
  ],
};

internals.store = new Confidence.Store(internals.manifest);

exports.get = key => internals.store.get(key, internals.criteria);

exports.meta = key => internals.store.meta(key, internals.criteria);
