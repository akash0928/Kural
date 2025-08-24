export interface Message {
  id: string;
  text: string;
  translation?: string;
  language: 'tamil' | 'english';
  timestamp: Date;
}

export interface Chat {
  id: string;
  title: string;
  messages: Message[];
  timestamp: Date;
}