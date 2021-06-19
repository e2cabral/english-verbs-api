import Verb from '../models/docs/verb.doc';
import IVerbService from '../protocols/i-verb.service';
import VerbRepository from '../../data/repositories/usecases/verb.repository';

class VerbService implements IVerbService {
  private repository: VerbRepository;

  constructor(repository: VerbRepository) {
    this.repository = repository;
  }

  loadOneById(id: string): Promise<Verb> {
    try {
      return this.repository.loadOneById(id);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  loadByAny(text: string): Promise<Array<Verb>> {
    try {
      return this.repository.loadByAny(text?.toLowerCase());
    } catch (err) {
      throw new Error(err.message);
    }
  }

  loadByBase(text: string): Promise<Array<Verb>> {
    try {
      return this.repository.loadByBase(text?.toLowerCase());
    } catch (err) {
      throw new Error(err.message);
    }
  }

  loadByPresentSimple(text: string): Promise<Array<Verb>> {
    try {
      return this.repository.loadByPresentSimple(text?.toLowerCase());
    } catch (err) {
      throw new Error(err.message);
    }
  }

  loadByPresentParticiple(text: string): Promise<Array<Verb>> {
    try {
      return this.repository.loadByPresentParticiple(text?.toLowerCase());
    } catch (err) {
      throw new Error(err.message);
    }
  }

  loadByPastSimple(text: string): Promise<Array<Verb>> {
    try {
      return this.repository.loadByPastSimple(text?.toLowerCase());
    } catch (err) {
      throw new Error(err.message);
    }
  }

  loadByPastParticiple(text: string): Promise<Array<Verb>> {
    try {
      return this.repository.loadByPastParticiple(text?.toLowerCase());
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new VerbService(new VerbRepository());
