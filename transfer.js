import {config} from 'dotenv';
import {Octokit} from '@octokit/core';
import readline from 'readline';
import fs from 'fs';

async function main() {
  config();

  const reposPath = 'repos.txt';
  const fileStream = fs.createReadStream(reposPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const repo of rl) {
    await transferRepo(
        repo,
        process.env.OLD_OWNER,
        process.env.NEW_OWNER,
        process.env.TOKEN,
    );
  }
}

/**
 * Transfer a repo from a GItHub user to another.
 *
 * @param {string} repo The name of the repo.
 * @param {string} owner The old user that give the repo.
 * @param {string} newOwner The new user that receive the repo.
 * @param {string} token The token ID to authenticate.
 *
 * @return {Promise<void>}
 */
async function transferRepo(repo, owner, newOwner, token) {
  const octokit = new Octokit({auth: token});
  const route = 'POST /repos/{owner}/{repo}/transfer';

  const response = await octokit.request(route, {
    owner,
    repo,
    new_owner: newOwner,
  });

  console.info(
      'Status [' + response.status + '] : ' +
      'Initialized [' + repo + '] transfer ' +
      'from [' + owner + '] ' +
      'to [' + newOwner + ']',
  );
}

await main();
