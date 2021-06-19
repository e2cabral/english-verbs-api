import {
  EntityRepository, getMongoRepository, MongoRepository,
} from 'typeorm';
import IVerbRepository from '../protocols/i-verb.repository';
import Verb from '../../../domain/models/docs/verb.doc';

@EntityRepository(Verb)
export default class VerbRepository implements IVerbRepository {
  loadByAny(text: string): Promise<Array<Verb>> {
    try {
      const handler: MongoRepository<Verb> = getMongoRepository(Verb);

      return handler.find({
        where: {
          base: new RegExp(`^${text}`),
          presentSimple: new RegExp(`^${text}`),
          presentParticiple: new RegExp(`^${text}`),
          pastSimple: new RegExp(`^${text}`),
          pastParticiple: new RegExp(`^${text}`),
        },
        take: 100,
        order: {
          base: 'ASC',
        },
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  loadByBase(text: string): Promise<Array<Verb>> {
    try {
      const handler: MongoRepository<Verb> = getMongoRepository(Verb);
      return handler.find({
        where: { base: new RegExp(`^${text}`) },
        take: 100,
        order: { base: 'ASC' },
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  loadByPresentSimple(text: string): Promise<Array<Verb>> {
    try {
      const handler: MongoRepository<Verb> = getMongoRepository(Verb);
      return handler.find({
        where: { presentSimple: new RegExp(`^${text}`) },
        take: 100,
        order: { base: 'ASC' },
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  loadByPresentParticiple(text: string): Promise<Array<Verb>> {
    try {
      const handler: MongoRepository<Verb> = getMongoRepository(Verb);
      return handler.find({
        where: { presentParticiple: new RegExp(`^${text}`) },
        take: 100,
        order: { base: 'ASC' },
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  loadByPastSimple(text: string): Promise<Array<Verb>> {
    try {
      const handler: MongoRepository<Verb> = getMongoRepository(Verb);
      return handler.find({
        where: { pastSimple: new RegExp(`^${text}`) },
        take: 100,
        order: { base: 'ASC' },
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  loadByPastParticiple(text: string): Promise<Array<Verb>> {
    try {
      const handler: MongoRepository<Verb> = getMongoRepository(Verb);
      return handler.find({
        where: { pastParticiple: new RegExp(`^${text}`) },
        take: 100,
        order: { base: 'ASC' },
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  loadOneById(id: string): Promise<Verb> {
    try {
      const handler: MongoRepository<Verb> = getMongoRepository(Verb);
      return handler.findOneOrFail(id);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
