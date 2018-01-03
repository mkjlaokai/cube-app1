import * as controller from './controller';
import * as validator from './schema';

exports.register = (server, options, next) => {
  server.route([
    {
      method: 'POST',
      path: '/demo',
      config: {
        tags: ['api'],
        description: '返回提交的内容，并添加 “I am Cube Demo”',
        notes: '假设提交的 input 内容为 "foo"，那么应当返回 "foo, I am Cube Demo"',
        handler: controller.sayDemo,
        validate: validator.input,
      },
    },
  ]);
  next();
};

exports.register.attributes = {
  name: 'demo-route',
};
