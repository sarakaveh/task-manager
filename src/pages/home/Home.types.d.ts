export interface Task {
  id: number;
  title: string;
  description: string;
  giftsKPI: string;
  priority: Priorities;
}

export type Priorities = 'low' | 'medium' | 'high';
