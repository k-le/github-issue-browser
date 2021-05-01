import { formatDate } from '@angular/common';

interface User {
  login: string;
}

export interface GitIssue {
  html_url: string;
  id: number;
  number: number;
  title: string;
  user: { login: string };
  state: string;
  created_at: string;
}

export const mockIssues: GitIssue[] = [
  {
    html_url: 'https://github.com/googleapis/google-cloud-python/issues/10521',
    id: 781596937,
    number: 10521,
    title: 'Automate constraints file updates',
    user: { login: 'busunkim96' },
    state: 'open',
    created_at: '2021-01-07T20:43:30Z',
  },
  {
    html_url: 'https://github.com/googleapis/google-cloud-python/issues/10521',
    id: 781596937,
    number: 10521,
    title: 'Automate constraints file updates',
    user: { login: 'busunkim96' },
    state: 'open',
    created_at: '2021-01-09T20:43:30Z',
  },
  {
    html_url: 'https://github.com/googleapis/google-cloud-python/issues/10521',
    id: 781596937,
    number: 10521,
    title: 'Automate constraints file updates',
    user: { login: 'busunkim96' },
    state: 'open',
    created_at: '2021-01-12T20:43:30Z',
  },
  {
    html_url: 'https://github.com/googleapis/google-cloud-python/issues/10521',
    id: 781596937,
    number: 10521,
    title: 'Automate constraints file updates',
    user: { login: 'busunkim96' },
    state: 'open',
    created_at: '2021-02-07T20:43:30Z',
  },
  {
    html_url: 'https://github.com/googleapis/google-cloud-python/issues/10521',
    id: 781596937,
    number: 10521,
    title: 'Automate constraints file updates',
    user: { login: 'busunkim96' },
    state: 'open',
    created_at: '2021-03-22T20:43:30Z',
  },
];
