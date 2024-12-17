export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
}