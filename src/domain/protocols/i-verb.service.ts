import Verb from '../models/docs/verb.doc';

export default interface IVerbService {
  // eslint-disable-next-line no-unused-vars
  loadByAny(text: string): Promise<Array<Verb>>;
  // eslint-disable-next-line no-unused-vars
  loadByBase(text: string): Promise<Array<Verb>>;
  // eslint-disable-next-line no-unused-vars
  loadByPresentSimple(text: string): Promise<Array<Verb>>;
  // eslint-disable-next-line no-unused-vars
  loadByPresentParticiple(text: string): Promise<Array<Verb>>;
  // eslint-disable-next-line no-unused-vars
  loadByPastSimple(text: string): Promise<Array<Verb>>;
  // eslint-disable-next-line no-unused-vars
  loadByPastParticiple(text: string): Promise<Array<Verb>>;
  // eslint-disable-next-line no-unused-vars
  loadOneById(id: string): Promise<Verb>;
};
