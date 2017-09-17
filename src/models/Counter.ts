import { Document, Schema } from 'mongoose';

interface ICounter {
    seq: number;
}

export const CounterSchema = new Schema({
        _id: {type: String, required: true},
        seq: {type: Number, default: 0}
    });

export interface ICounterModel extends ICounter, Document { }
