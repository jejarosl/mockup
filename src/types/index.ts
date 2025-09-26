export interface Participant {
  id: string;
  name: string;
  role: string;
  email: string;
  isAdvisor: boolean;
}

export interface MeetingBrief {
  id: string;
  title: string;
  date: string;
  participants: Participant[];
  previousHighlights: string[];
  openTasks: Task[];
  riskFlags: RiskFlag[];
  suggestedServices: string[];
}

export interface Task {
  id: string;
  description: string;
  owner: string;
  dueDate: string;
  status: 'todo' | 'in-progress' | 'done';
  confidenceScore?: number;
  evidence?: string;
  category: string;
}

export interface RiskFlag {
  id: string;
  type: 'compliance' | 'risk' | 'regulatory';
  message: string;
  severity: 'low' | 'medium' | 'high';
}

export interface TranscriptEntry {
  id: string;
  timestamp: string;
  speaker: string;
  text: string;
  isActionItem?: boolean;
  confidenceScore?: number;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  uploadDate: string;
  size: string;
}

export type ViewMode = 'prep' | 'live' | 'post';