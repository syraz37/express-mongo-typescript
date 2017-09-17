import * as mongoose from 'mongoose';
import { CounterSchema, ICounterModel } from './Counter';
import { IUserModel, UserSchema} from './User';

import blueBird = require('bluebird');

// mongoose.set('debug', true);
(<any>mongoose).Promise = global.Promise;

const connection = mongoose.createConnection('mongodb://localhost:27017/userManagement', {
    // promiseLibrary: blueBird,
    useMongoClient: true
});

connection.once('open', () => {
    console.log('Connected to mongodb');
});

export const Counter = connection.model<ICounterModel>('Counter', CounterSchema);
export const User = connection.model<IUserModel>('User', UserSchema);
