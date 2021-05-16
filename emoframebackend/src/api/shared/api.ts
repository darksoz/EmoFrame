import {Document} from 'mongoose';

export class Api extends Document{
    description: string;
    completed: boolean;
}
