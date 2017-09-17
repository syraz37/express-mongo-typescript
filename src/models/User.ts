import { Document, Schema } from 'mongoose';
import { Counter } from './Models';

interface IUser {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

export const UserSchema = new Schema({
        _id: {type: Number},
        email: {type: String, required: true},
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        password: {type: String, required: true}
    }, {
        timestamps: true
    });

UserSchema.pre('save', function(next) {
    const doc = this;
    Counter.findByIdAndUpdate({_id: 'users'}, {$inc: {seq: 1}}, (error, counter) => {
        if (error) {
            return next(error);
        }
        doc._id = counter.seq;
        next();
    });
});

export interface IUserModel extends IUser, Document { }
