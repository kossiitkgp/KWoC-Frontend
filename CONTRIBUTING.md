# Contributing Guidelines

Hi :wave: there, welcome to KWoC React project. We are glad that you considered contributing! Here are a few points that will help you have a great time coding and contributing.

## Guidelines

- We do not commit to `master` branch directly. We open pull requests and merge them in master after review.

### We are using:

- [yarn](https://yarnpkg.com/en/) to manage packages.
- [React Router](https://www.npmjs.com/package/react-router-dom) to handle routes.
- [Bulma](https://bulma.io/documentation/) for CSS styling and SCSS files for styles.
- [Netlify](https://kwoc-react-beta.netlify.com/) to deploy the site.
- Dependabot to warn us for dependencies with security problems.

## Contribution Workflow

- Each contribution begins with an issue in this repo or a discussion in the [#kwoc-react](https://kossiitkgp.slack.com/messages/CK8KPE32A/) channel.
  - Create the issue as necessary.
  - If you lack the technical knowhow, refer to [Learning Guide](learn.md) or ask for help to anyone.
- Create a Branch and Commit your changes.
- Check if the solution works by testing it locally.
- Submit a PR with an appropriate name including the term `Fixes #{issue number}` if it fixes that particular issue.
- Be attentive and respond to comments and suggestions in the opened PR.
- We will merge your PR after reviewing and testing it.

## Project Structure

The files are setup as follows:

```
Public/
|____images/
| |____(All the image content)
src/
|____styles/
| |____(Styles for components filetype:scss)
|____App.js
|____index.js
|____components/
| |____(React Components and Pages)
|____serviceWorker.js

```

We expect you to follow the same structure and organize your files accordingly.

## Building and running locally

First install all the dependencies using yarn (:warning: not npm​) by running `$ yarn` in the root directory.

Everything including building and serving locally is pre-configured in the `package.json` file. You can run the command `$yarn start` to start a live server.

## Testing for performance

Please note to not judge the performance of the app in the live development mode. To compare the performance generate a "production build" (`yarn build`)and serve locally using any server or push to a personal Netlify app using `$ npx netlify-cli deploy` and choose `./build` as the deployment directory. Then test the site for performance and network issues.

## Deployment Process

Each commit to master branch is built and deployed by Netlify to https://kwoc-react-beta.netlify.com/. You only need to test locally using `$ yarn start`. You do not need to build it and push the build files as they are included in the `.gitignore`.

## Workspace Setup

This setup is recommended but not enforced. Please note that we expect clean well formated code and these tools make it easier for us to have a consistent code style throughout the codebase.

### Yarn

We use [yarn](https://yarnpkg.com/en/) as the package manager. Please do not use `npm` with this project to manage dependencies. It will result in clashing dependencies and may cause unintended errors.

To add new dependency use `yarn add`, so if you need to run `npm install <package>` run `yarn add <package>`.

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
