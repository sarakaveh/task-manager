export interface Task {
  id: number;
  title: string;
  description: string;
  giftsKPI: string;
  priority: 'low' | 'medium' | 'high';
}
