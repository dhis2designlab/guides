---
index: 0
title: React
description: Learn to use React.
---

# React
[React](https://reactjs.org) is a free and open-source JavaScript library created by Facebook. This guide is a brief introduction to React. The [React Docs](https://reactjs.org/docs/getting-started.html) provide a more comprehensive overview.

## Create React App
[Create React App (CRA)](https://facebook.github.io/create-react-app/docs/getting-started) is a tool to create a React apps. To use CRA you need either [npm](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/en/docs/install). The choice is yours, but our guides will use npm.

### Creating a new app
```bash
npx create-react-app my-app
cd my-app
```
A new app is created in the *my-app* directory.

### Running the app
```bash
npm start
```
The app should now be available at [http://localhost:3000](http://localhost:3000). Any changes you make to the code should be reflected in your browser.

### Installing app dependencies
```bash
npm install
```

### Adding dependecies
```bash
npm install @dhis2/ui-core
npm install @dhis2/cli-style -D
```
The *-D* flag installs a package in devDependencies, and should be used for packages that are not used in production by end users. The [@dhis2/ui-core](https://github.com/dhis2/ui-core) package contains a [DHIS2 UI library](../ui). The [@dhis2/cli-style](https://github.com/dhis2/cli-style) package may be used to standardize the formatting of code and git commit messages.


### Building
```bash
npm run build
```
This creates an optimized build of the app. You will find it in the *build* directory.