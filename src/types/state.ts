import React from 'react';
import { Dispatch } from 'redux';
import { Variants } from 'styled-minimal/lib/types';
import { ValueOf } from 'type-fest';

import { AlertPosition, Icons, Status } from './common';

export interface AlertData {
  icon: Icons;
  id: string;
  message: React.ReactNode;
  position: AlertPosition;
  timeout: number;
  variant: Variants;
}

export interface Topic {
  cached: boolean;
  data: Array<Record<string, any>>;
  message: string;
  status: ValueOf<Status>;
  updatedAt: number;
}

export interface MessageData {
  content: string;
  role: string;
}

export interface AlertsState {
  data: AlertData[];
}

export interface AppState {
  query: string;
}

export interface GitHubState {
  topics: Record<string, Topic>;
}

export interface UserState {
  isAuthenticated: boolean;
  status: ValueOf<Status>;
}

export interface StoryState {
  messages: MessageData[];
  question: string | null;
  status: ValueOf<Status>;
  title: string | null;
}

export interface RootState {
  alerts: AlertsState;
  app: AppState;
  github: GitHubState;
  story: StoryState;
  user: UserState;
}

export interface WithDispatch {
  dispatch: Dispatch;
}
