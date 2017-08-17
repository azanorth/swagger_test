const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
 
const server = new Hapi.Server();

server.connection({
        host: 'localhost',
        port: 3000
    });

const options = {
  info: {
    'title': 'Test Swagger Documentation',
    'description': 'test docs', 
    'version': '0.0.1'
    },
    tags: [
      {
        'name': 'get',
        'description': 'methods get hapiJs.'
      },
      {
        'name': 'post',
        'description': 'methods post hapiJs.'
      }
    ],
    documentationPath: '/docs'
  };

server.register([
    Inert,
    Vision,
    {
        'register': HapiSwagger,
        'options': options
    }], (err) => {
        server.start( (err) => {
           if (err) {
                console.log(err);
            } else {
                console.log('Server running at:', server.info.uri);
            }
        });
    });

server.route(require('./src/routes'));
