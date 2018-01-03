exports.register = (server, options, next) => {
  server.route([
    {
      method: 'GET',
      path: '/{app*}',
      config: {
        auth: false,
        tags: ['api', 'app'],
        description: '访问项目首页',
        notes: '访问项目首页的html页面，需要把前端项目的`index.html`文件复制到项目根目录下的`build`文件夹中',
        handler: {
          file: () => 'build/index.html',
        },
      },
    },
    {
      method: 'GET',
      path: '/favicon.ico',
      config: {
        auth: false,
        tags: ['api', 'app'],
        description: '访问网站图标文件',
        notes: '直接访问前端编译后的图标文件，请确保前端项目编译后的`favicon.ico`文件在项目根目录下的`build`文件夹中',
        handler: {
          file: () => 'build/favicon.ico',
        },
      },
    },
    {
      method: 'GET',
      path: '/static/{foldername}/{filename}',
      config: {
        auth: false,
        tags: ['api', 'static'],
        description: '访问静态文件',
        notes: '直接访问`static`目录下的静态文件，请确保项目根目录下有`build`目录和`static`子目录',
        handler: {
          file: request => `build${request.path}`,
        },
      },
    },
  ]);
  next();
};

exports.register.attributes = {
  name: 'static-files-route',
};
