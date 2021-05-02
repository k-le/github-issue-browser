import { mockIssues } from './GitIssue';

export interface IssueComment {
  html_url: string;
  user: { login: string };
  created_at: string;
  updated_at: string;
  author_association: string;
  body: string;
}

export const mockComments: IssueComment[] = [
  {
    html_url:
      'https://github.com/googleapis/google-cloud-python/issues/10533#issuecomment-770380726',
    user: { login: 'yoshi-automation' },
    created_at: '2021-01-31T13:13:28Z',
    updated_at: '2021-01-31T13:13:28Z',
    author_association: 'CONTRIBUTOR',
    body: 'Autosynth is still having trouble generating google-cloud-python.',
  },
  {
    html_url:
      'https://github.com/googleapis/google-cloud-python/issues/10533#issuecomment-770847445',
    user: { login: 'yoshi-automation' },
    created_at: '2021-02-01T13:13:22Z',
    updated_at: '2021-02-01T13:13:22Z',
    author_association: 'CONTRIBUTOR',
    body:
      "Autosynth is still having trouble generating google-cloud-python. :sob:\n\nHere's the output from running",
  },
  {
    html_url:
      'https://github.com/googleapis/google-cloud-python/issues/10533#issuecomment-780687415',
    user: { login: 'busunkim96' },
    created_at: '2021-02-17T16:40:43Z',
    updated_at: '2021-02-17T16:40:43Z',
    author_association: 'CONTRIBUTOR',
    body:
      'Lowering priority on this since is the README updating that is broken, not an actual library.',
  },
];
