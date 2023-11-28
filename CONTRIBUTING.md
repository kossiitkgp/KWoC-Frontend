# Contributing Guidelines

Hi :wave: there, welcome to KWoC React project. We are glad that you considered contributing! Here are a few points that will help you have a great time coding and contributing.

## Guidelines

- We do not commit to `master` branch directly. We open pull requests and merge them in master after review.
- Please comment under the issue and wait for it to be assigned to you.

### We are using:

- [PNPM](https://pnpm.io) to manage packages.
- [React Router](https://www.npmjs.com/package/react-router-dom) to handle routes.

## Contribution Workflow

- Each contribution begins with an issue in this repo.
  - Create the issue as necessary.
  - If you lack the technical knowhow, refer to [Learning Guide](learn.md) or ask for help to anyone.
- Comment under the issue and wait for it to be assigned to you.
- Create a Branch and Commit your changes.
  - Name the branch carefully. For example `feature-card-component`, `bugfix-overlay`. Do not use generic names such as `develop`, `work`, your username etc.
  - Name the commits meaningfully. For help read [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/).
- Check if the solution works by testing it locally.
- Submit a PR with an appropriate name including the term `Fixes #{issue number}` if it fixes that particular issue.
- Be attentive and respond to comments and suggestions in the opened PR.
- We will merge your PR after reviewing and testing it.

## Building and running locally

First install all the dependencies using pnpm (:warning: not npm​) by running `$ pnpm` in the root directory.

Everything including building and serving locally is pre-configured in the `package.json` file. You can run the command `$pnpm start` to start a live server.

## Workspace Setup

This setup is recommended but not enforced. Please note that we expect clean well formated code and these tools make it easier for us to have a consistent code style throughout the codebase.

### PNPM

We use [PNPM](https://pnpm.io) as the package manager. Please do not use `npm` with this project to manage dependencies. It will result in clashing dependencies and may cause unintended errors.

To add new dependency use `pnpm add`, so if you need to run `npm install <package>` run `pnpm add <package>`.

<!-- TODO: remove bulma from documentation once the work is done -->

### VSCode

The text editor of choice. You can choose any other as long as they support [prettier](https://prettier.io/).

#### Extension - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

#### Extension - [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

#### Configuration - Settings.json

```json
{
  "files.trimTrailingWhitespace": true,
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true
}
```
