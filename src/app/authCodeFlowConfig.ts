import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  // URL for the identity provider.
  issuer: 'https://github.com/login/oauth/authorize',

  // URL in app where users will be sent after authorization.
  redirectUri: window.location.origin + '/dashboard',

  // SPA's id provided by GitHub.
  clientId: 'dda173562630d9ffa321',

  dummyClientSecret: 'b779571ee741aff81823b82e3cf862b80fd7c75f',

  responseType: 'code',

  // Scope for the permissions that the SPA requests.
  // Request 'offline_access' to get a refresh token.
  scope: 'offline_access',
};
