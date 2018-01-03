import Hoek from 'hoek';
import Composer from './index';

Composer((err, server) => {
  Hoek.assert(!err, err);
  server.start(() => {
    const api = server.select('api');
    server.log('bootstrap', `Server started @ ${api.info.uri}`);
    server.log('bootstrap', `NODE_ENV: ${process.env.NODE_ENV}`);
  });
});
