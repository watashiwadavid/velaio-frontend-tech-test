export interface Task {
  id: string;
  name: string;
  date: string;
  state: 'pending' | 'complete';

  people: {
    name: string;
    age: number;
    skills: string[];
  }[];
}
