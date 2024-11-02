export interface IMessage {
  to: string;
  body: string;
  type: 'text' | 'image' | 'template';
}
