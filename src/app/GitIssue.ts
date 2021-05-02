interface Labels {
  name: string;
  description: string;
}

export interface GitIssue {
  html_url: string;
  id: number;
  number: number;
  title: string;
  user: { login: string };
  labels: Labels[];
  state: string;
  created_at: string;
}

export const mockIssues: GitIssue[] = [
  {
    html_url: 'https://github.com/googleapis/google-cloud-python/issues/10521',
    id: 781596937,
    number: 105211,
    title: 'Automate constraints file updates',
    user: { login: 'busunkim96' },
    labels: [
      {
        name: 'type: docs',
        description: 'Improvement to the documentation for an API.',
      },
    ],
    state: 'open',
    created_at: '2021-01-07T20:43:30Z',
  },
  {
    html_url: 'https://github.com/googleapis/google-cloud-python/issues/10521',
    id: 781596937,
    number: 105212,
    title: 'Automate constraints file updates',
    user: { login: 'busunkim96' },
    labels: [
      {
        name: 'type: feature request',
        description: 'Improvement to the documentation for an API.',
      },
    ],
    state: 'open',
    created_at: '2021-01-09T20:43:30Z',
  },
  {
    html_url: 'https://github.com/googleapis/google-cloud-python/issues/10521',
    id: 781596937,
    number: 105213,
    title: 'Automate constraints file updates',
    user: { login: 'busunkim96' },
    labels: [
      {
        name: 'type: docs',
        description: 'Improvement to the documentation for an API.',
      },
    ],
    state: 'open',
    created_at: '2021-01-12T20:43:30Z',
  },
  {
    html_url: 'https://github.com/googleapis/google-cloud-python/issues/10521',
    id: 781596937,
    number: 105214,
    title: 'Automate constraints file updates',
    user: { login: 'busunkim96' },
    labels: [
      {
        name: 'type: docs',
        description: 'Improvement to the documentation for an API.',
      },
    ],
    state: 'open',
    created_at: '2021-02-07T20:43:30Z',
  },
  {
    html_url: 'https://github.com/googleapis/google-cloud-python/issues/10521',
    id: 781596937,
    number: 105215,
    title: 'Automate constraints file updates',
    user: { login: 'busunkim96' },
    labels: [
      {
        name: 'type: docs',
        description: 'Improvement to the documentation for an API.',
      },
    ],
    state: 'open',
    created_at: '2021-03-22T20:43:30Z',
  },
  {
    html_url: 'https://github.com/googleapis/google-cloud-python/issues/10521',
    id: 781596937,
    number: 105216,
    title: 'Automate constraints file updates',
    user: { login: 'busunkim96' },
    labels: [
      {
        name: 'type: docs',
        description: 'Improvement to the documentation for an API.',
      },
    ],
    state: 'open',
    created_at: '2021-01-07T20:43:30Z',
  },
  {
    html_url: 'https://github.com/googleapis/google-cloud-python/issues/10521',
    id: 781596937,
    number: 105217,
    title: 'Automate constraints file updates',
    user: { login: 'busunkim96' },
    labels: [
      {
        name: 'type: docs',
        description: 'Improvement to the documentation for an API.',
      },
    ],
    state: 'open',
    created_at: '2021-01-09T20:43:30Z',
  },
  {
    html_url: 'https://github.com/googleapis/google-cloud-python/issues/10521',
    id: 781596937,
    number: 105218,
    title: 'Automate constraints file updates',
    user: { login: 'busunkim96' },
    labels: [
      {
        name: 'type: docs',
        description: 'Improvement to the documentation for an API.',
      },
    ],
    state: 'open',
    created_at: '2021-01-12T20:43:30Z',
  },
  {
    html_url: 'https://github.com/googleapis/google-cloud-python/issues/10521',
    id: 781596937,
    number: 105219,
    title: 'Automate constraints file updates',
    user: { login: 'busunkim96' },
    labels: [
      {
        name: 'type: docs',
        description: 'Improvement to the documentation for an API.',
      },
    ],
    state: 'open',
    created_at: '2021-02-07T20:43:30Z',
  },
  {
    html_url: 'https://github.com/googleapis/google-cloud-python/issues/10521',
    id: 781596937,
    number: 105210,
    title: 'Automate constraints file updates',
    user: { login: 'busunkim96' },
    labels: [
      {
        name: 'type: docs',
        description: 'Improvement to the documentation for an API.',
      },
    ],
    state: 'open',
    created_at: '2021-03-22T20:43:30Z',
  },
];
