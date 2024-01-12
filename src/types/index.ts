import { type FieldValue } from 'firebase/firestore';

export interface IMessage {
  createdAt: FieldValue;
  displayName: string;
  photoURL: string;
  text: string;
  uid: string;
}
