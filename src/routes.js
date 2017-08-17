const Shcemas = require('./validator')

const Routes = [
{
  method: 'GET',
  path: '/get/main',
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
            'schema': Shcemas.getSchema
          },
          '404': {
            'description': 'object not found.',
            'schema': Shcemas.getNotFoundSchema
          }
        }
      }
    }
  }
},
{
  method: 'GET',
  path: '/get/{name}',
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
            'schema': Shcemas.getSchema
          },
          '404': {
            'description': 'object not found.',
            'schema': Shcemas.getNotFoundSchema
          }
        }
      }
    }
  }
},
{
  method: 'post',
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
            'schema': Shcemas.postSchema
          },
          '404': {
            'description': 'object not found.',
            'schema': Shcemas.postNotFoundSchema
          }
        }
      }
    }
  }
},
{
  method: 'GET',
  path: '/get/boo',
  config: {
    handler: (req, reply) => {
      reply('Hello world!');
    },
    description: 'get',
    notes: 'third method GET',
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        responses: {
          '200': {
            'description': 'object founded.',
            'schema': Shcemas.getSchema
          },
          '404': {
            'description': 'object not found.',
            'schema': Shcemas.getNotFoundSchema
          }
        }
      }
    }
  }
}
];

module.exports = Routes;
