import * as Hapi from '@hapi/hapi';

export const hapiServer = Hapi.server();

hapiServer.route({
  method: 'GET',
  path: '/hello/hapi',
  handler: (request, h) => {
    return 'Hello Hapi!';
  },
});

hapiServer.route({
  method: 'GET',
  path: '/hello/hapi/{id}/params',
  handler: (request, h) => {
    return `Hello Hapi! Your id is ${request.params.id}`;
  },
});
