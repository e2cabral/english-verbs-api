import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';
import VerbService from '../../domain/usecases/verb.service';

class VerbController {
  async loadByAny(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const { text } = request.query as { text: string };
      reply.send(await VerbService.loadByAny(text));
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async loadByBase(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const { text } = request.query as { text: string };
      reply.send(await VerbService.loadByBase(text));
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async loadByPresentSimple(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const { text } = request.query as { text: string };
      reply.send(await VerbService.loadByPresentSimple(text));
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async loadByPresentParticiple(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const { text } = request.query as { text: string };
      reply.send(await VerbService.loadByPresentParticiple(text));
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async loadByPastSimple(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const { text } = request.query as { text: string };
      reply.send(await VerbService.loadByPastSimple(text));
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async loadByPastParticiple(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const { text } = request.query as { text: string };
      reply.send(await VerbService.loadByPastParticiple(text));
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async loadOneById(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const { id } = request.params as { id: string };
      reply.send(await VerbService.loadOneById(id));
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default container.resolve(VerbController);
