import Verb from '../../domain/models/docs/verb.doc';

export default class Mongodb {
  static getConnection(): {
    name: string,
    type: string,
    host: string,
    port: number,
    database: string,
    useUnifiedTopology: boolean,
    entities: Array<unknown>,
    synchronize: boolean
    } {
    return {
      name: 'default',
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'english',
      useUnifiedTopology: true,
      entities: [Verb],
      synchronize: true,
    };
  }
}
