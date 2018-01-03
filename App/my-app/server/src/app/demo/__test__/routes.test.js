import Composer from '../../../index';

describe('Route /demo', () => {
  describe('测试 demo：POST /demo', () => {
    let server;
    beforeAll(async () => {
      const _server = await Composer();
      server = _server.select('api');
    });

    it('should return message correctly', async () => {
      const options = {
        method: 'POST',
        url: '/demo',
        payload: {
          input: 'Hello',
        },
      };
      const resp = await server.inject(options);
      expect(resp).toHaveProperty('statusCode', 200);
      expect(resp.result).toHaveProperty('message', 'Hello, I am Cube Demo');
    });
  });
});
