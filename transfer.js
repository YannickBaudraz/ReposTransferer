import {config} from 'dotenv';
import {Octokit} from '@octokit/core';

(async () => {
  config();

  const octokit = new Octokit({
    auth: process.env.TOKEN,
  });

  await octokit.request('POST /repos/{owner}/{repo}/transfer', {
    owner: process.env.OLD_OWNER,
    repo: 'repo',
    new_owner: process.env.NEW_OWNER,
  });
})();
