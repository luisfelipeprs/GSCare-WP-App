import { IMessage } from './IMessage';

export class Message implements IMessage {
    constructor(
        public to: string,
        public body: string,
        public type: 'text' | 'image' | 'template'
    ) {}
}
