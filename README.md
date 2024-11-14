<div id="top></div>

<!-- README TEMPLATE BASED ON https://github.com/proffapt/myREADME -->
<!-- PROJECT SHIELDS -->
<div align="center">
  <p align="center">
    <a href="https://kossiitkgp.org">
      <img alt="KOSS Shield" src="https://img.shields.io/badge/With%20%E2%9D%A4%EF%B8%8F-KOSS-blue?style=for-the-badge">
    </a>
    <a href="https://github.com/kossiitkgp/KWoC-Frontend/blob/master/LICENSE">
      <img alt="License Shield" src="https://img.shields.io/github/license/kossiitkgp/KWoC-Frontend.svg?style=for-the-badge">
    </a>
    <a href="https://github.com/kossiitkgp/KWoC-Frontend/contributors">
      <img alt="Contributors Shield" src="https://img.shields.io/github/contributors/kossiitkgp/KWoC-Frontend.svg?style=for-the-badge">
    </a>
  </p>
</div>

<!-- PROJECT LOGO -->
<br />
<!-- UPDATE -->
<div align="center">
  <a href="https://github.com/kossiitkgp/KWoC-Frontend">
    <img width="140" alt="KWoC Logo" src="https://raw.githubusercontent.com/kossiitkgp/design/master/logo/kwoc/kwoc_logo.png">
  </a>

  <h3 align="center">KWoC Frontend</h3>

  <p align="center">
  <!-- UPDATE -->
    <i>frontend for KWoC 2024</i>
    <br />
    <a href="#table-of-contents"><strong>Get Started »</strong></a>
    <br />
    <a href="https://kwoc.kossiitkgp.org">Kharagpur Winter of Code</a>
    ·
    <a href="https://github.com/kossiitkgp/KWoC-Backend">Backend</a>
  </p>
</div>

## Table of Contents

- [Development](#development)
  - [Setting Up Locally](#setting-up-locally)
- [Project Structure](#project-structure)
  - [File Structure](#file-structure)
  - [Libraries/Frameworks Used](#librariesframeworks-used)
- [Responsibilities](#responsibilities)
  - [Frontend](#frontend)
- [Archival](#archival)
<p align="right">(<a href="#top">back to top</a>)</p>

## Development

See also [Contributing Guide](./CONTRIBUTING.md), [Learning Guide](./learn.md).

### Setting Up Locally

- Install [NodeJS](https://nodejs.org/en).
- Install or enable [PNPM](https://pnpm.io/installation).
- Clone this repository.
- Run `pnpm install` in the cloned repository to download all dependencies.
- Run `pnpm run dev` to start a local development server.
- Optionally set up [KWoC Backend](https://github.com/kossiitkgp/kwoc-backend) locally.

```
git clone https://github.com/kossiitkgp/KWoC-Frontend/blob/kwoc24.git
cd KWoC-Frontend
pnpm install
pnpm run dev
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Project Structure

### File Structure

```
.
├── public
└── src
   ├── assets
   ├── components
   ├── data
   ├── hooks
   ├── styles
   ├── utils
   ├── constants.ts
   └── App.tsx
```

- `public`: Contains public files such as `index.html`.
- `src`: Contains source files (JS, SCSS, assets, etc.)
  - `assets`: Contains assets used in the source, such as images and icons.
  - `components`: Contains reusable react components.
  - `data`: Contains raw data.
  - `styles`: Contains all stylesheets (SCSS).
  - `utils`: Contains commonly used util functions.
  - `pages`: Contains views for each of the pages.
  - `constants.ts`: Contains globally used constants.
  - `App.tsx`: Contains the top-level `App` component.

### Libraries/Frameworks Used

- [React](https://reactjs.dev)
- [react-snowfall](https://github.com/cahilfoley/react-snowfall) for a pretty snowfall effect
- And [many more](./package.json).
<p align="right">(<a href="#top">back to top</a>)</p>

## Responsibilities

### Frontend
- Design: 
  - [@dakshyadav1810](https://github.com/dakshyadav1810)
- Header and Footer: 
  - [@premagarwals](https://github.com/premagarwals)
  - [@Ananya-m0140](https://github.com/Ananya-m0140)
- Hero and Timeline: 
  - [@Majestic9169](https://github.com/Majestic9169)
  - [@Faizan2005](https://github.com/Faizan2005)
<p align="right">(<a href="#top">back to top</a>)</p>

## Archival

See also [KWoC Docs](https://github.com/kossiitkgp/docs/blob/master/events/kwoc.md#certificates).

After KWoC ends, the website is archived. The stats data (including the total PRs, total commits, total contributors, and individual stats) is copied and added to the site source.

The archived source code is committed to a branch named `kwoc-xx-archive` and hosted on `kwocxx.kossiitkgp.org`, where `xx` represents the last two digits of the year. The archive is also hosted on `kwoc.kossiitkgp.org` until the following year's website is deployed.

The development for the next KWoC website continues in the default branch.

> **WARNING** DO NOT COMMIT ANY PERSONAL DATA TO THE ARCHIVE.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Choose an Open Source License](https://choosealicense.com)
- [Img Shields](https://shields.io)

<p align="right">(<a href="#top">back to top</a>)</p>

---

> Please update this documentation whenever changes are made to this project or any other relevant project that may affect this one. Future humans will praise you.


<!-- # React + TypeScript + Vite -->
<!---->
<!-- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. -->
<!---->
<!-- Currently, two official plugins are available: -->
<!---->
<!-- - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh -->
<!-- - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->
<!---->
<!-- ## Expanding the ESLint configuration -->
<!---->
<!-- If you are developing a production application, we recommend updating the configuration to enable type aware lint rules: -->
<!---->
<!-- - Configure the top-level `parserOptions` property like this: -->
<!---->
<!-- ```js -->
<!-- export default tseslint.config({ -->
<!--   languageOptions: { -->
<!--     // other options... -->
<!--     parserOptions: { -->
<!--       project: ['./tsconfig.node.json', './tsconfig.app.json'], -->
<!--       tsconfigRootDir: import.meta.dirname, -->
<!--     }, -->
<!--   }, -->
<!-- }) -->
<!-- ``` -->
<!---->
<!-- - Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked` -->
<!-- - Optionally add `...tseslint.configs.stylisticTypeChecked` -->
<!-- - Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config: -->
<!---->
<!-- ```js -->
<!-- // eslint.config.js -->
<!-- import react from 'eslint-plugin-react' -->
<!---->
<!-- export default tseslint.config({ -->
<!--   // Set the react version -->
<!--   settings: { react: { version: '18.3' } }, -->
<!--   plugins: { -->
<!--     // Add the react plugin -->
<!--     react, -->
<!--   }, -->
<!--   rules: { -->
<!--     // other rules... -->
<!--     // Enable its recommended rules -->
<!--     ...react.configs.recommended.rules, -->
<!--     ...react.configs['jsx-runtime'].rules, -->
<!--   }, -->
<!-- }) -->
<!-- ``` -->
