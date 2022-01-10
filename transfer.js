import {Octokit} from '@octokit/core';

(async () => {
  const octokit = new Octokit({
    auth: 'token',
  });

  await octokit.request('POST /repos/{owner}/{repo}/transfer', {
    owner: 'old owner',
    repo: 'repo',
    new_owner: 'new owner',
  });
})();
