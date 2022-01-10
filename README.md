# Transfer repos

Transfer all repos from a GitHub user to another.

## Prerequisites

- Node & Npm

## Usage

1. Crate a new token with the permissions to transfer a repo - In GitHub,
   `Settings > Developer Settings > Personal Access Tokens`
2. Copy the `.env.example` file to `.env`
    1. Update variables
3. Copy `repos.example.txt` file to `repos.txt`
    1. Add name of your repos.
4. Run commands
    ```shell
    npm install
    node transfer.js
    ```
6. If nothing is shown in the console, it means that everything went well.
7. You should receive emails asking to click on a link to confirm the transfer.
8. Log into the receiving GitHub account in a browser and open links in this browser.
