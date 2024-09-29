export interface Task {
  id: string;
  name: string;
  date: string;
  isComplete: boolean;

  people: {
    name: string;
    age: number;
    skills: string[];
  }[];
}
