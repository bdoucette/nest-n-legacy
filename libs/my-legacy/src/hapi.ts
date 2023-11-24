const Hapi = require('@hapi/hapi');

export const hapiServer = Hapi.server({
  port: 4000,
  host: 'localhost',
});

hapiServer.route({
  method: 'GET',
  path: '/hello/hapi',
  handler: (request, h) => {
    return 'Hello Hapi!';
  },
});
