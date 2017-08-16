const Shcemas = require('./validator')

const Routes = [
{
  method: 'GET',
  path: '/main',
  config: {
    handler: (req, reply) => {
      reply('Hello world!');
    },
    description: 'get',
    notes: 'first method GET',
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '200': {
            'description': 'object founded.',
            'schema': Shcemas.getShema
          },
          '404': {
            'description': 'object not found.',
            'shcema': Shcemas.getNotFoundShema
          }
        }
      }
    }
  }
},
{
  method: 'GET',
  path: '/{name}',
  config: {
    handler: (req, reply) => {
      reply('Hello ' + encodeURIComponent(req.params.name) + ' !');
    },
    description: 'get',
    notes: 'second method GET',
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '200': {
            'description': 'object founded.',
            'schema': Shcemas.getShema
          },
          '404': {
            'description': 'object not found.',
            'shcema': Shcemas.getNotFoundShema
          }
        }
      }
    }
  }
},
{
  method: 'POST',
  path: '/post',
  config: {
    handler: (req, reply) => {
      reply(req.payload);
    },
    description: 'post',
    notes: 'first method post',
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '200': {
            'description': 'object founded.',
            'shcema': Shcemas.postShema
          },
          '404': {
            'description': 'object not found.',
            'shcema': Shcemas.postNotFoundShema
          }
        }
      }
    }
  }
}
];

module.exports = Routes;
