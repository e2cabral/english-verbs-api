import { FastifyInstance } from 'fastify';
import VerbController from '../../presentation/controller/verb.controller';
import queryStringOptions from './protocols/query-string.param';

export default (app: FastifyInstance) => {
  app.register((instance: FastifyInstance, opts, done) => {
    instance
      .get('/verbs', {
        handler: VerbController.loadByAny,
        schema: { querystring: queryStringOptions },
      })
      .get('/verbs/base', {
        handler: VerbController.loadByBase,
        schema: { querystring: queryStringOptions },
      })
      .get('/verbs/simple-present', {
        handler: VerbController.loadByPresentSimple,
        schema: { querystring: queryStringOptions },
      })
      .get('/verbs/present-participle', {
        handler: VerbController.loadByPresentParticiple,
        schema: { querystring: queryStringOptions },
      })
      .get('/verbs/simple-past', {
        handler: VerbController.loadByPastSimple,
        schema: { querystring: queryStringOptions },
      })
      .get('/verbs/past-participle', {
        handler: VerbController.loadByPastParticiple,
        schema: { querystring: queryStringOptions },
      })
      .get('/verbs/id/:id', {
        handler: VerbController.loadOneById,
        schema: { params: { type: 'object', properties: { id: { type: 'string' } } } },
      });
    done();
  }, { prefix: 'v1/api' });
};
