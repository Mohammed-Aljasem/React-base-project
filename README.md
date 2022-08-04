# Getting Started with Create React App

[![License](https://img.shields.io/npm/l/express.svg)](https://github.com/Mohammed-Aljasem/React-base-project)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

libraries used in project:\
[Redux](https://redux.js.org/)\
[Redux Toolkit](https://redux-toolkit.js.org/) TS template.\
[TailwindCss](https://tailwindcss.com/)\
[MaterialUI ](https://mui.com/)\
[TypeScript](https://www.typescriptlang.org/)\
[eslint](https://eslint.org/)\
[Craco](https://github.com/dilanx/craco)\
[generate react cli](https://github.com/arminbro/generate-react-cli)

## Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

`npx generate-react-cli component ComponentName`

create new component in default path `./src/components` also you can change the location by add this to the command `--type=pages` or `--type=feature` and you can add custom types from this file `./generate-react-cli.json`
for more information please visit [generate-react-cli Doc](https://github.com/arminbro/generate-react-cli)

## Aliases

this project setup with aliases with `craco-alias`
you can import your components like this:\
`import { Counter } from '@features/counter/Counter';`
the project already has 4 aliases until now:\
`features`\
`components`\
`pages`\
`assets`\

you can add more aliases in this file `./tsconfig.extend.json`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
