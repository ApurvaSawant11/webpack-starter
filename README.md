# Webpack Starter Template

## [Live deployed website](https://webpack-starter-apurva.netlify.app)

## Features

- Webpack configuration files
- Loaders: CSS, assets, babel loaders in the config file
- HTML webpack plugin: Simplify creation of HTML file that serves bundles
- Hashing
- Code Splitting: Splitting code into chunks that are loaded in parallel
- Lazy Loading: Improved loading of resources on user interaction
- Caching: Implemented caching for faster loading of resources

<hr />

## Local Setup

### 1. Cloning the repository

To clone the repository locally, run the following set of commands:

```
git clone https://github.com/ApurvaSawant11/webpack-starter.git
cd webpack-starter
npm install
npm start
```

### 2. Use [degit](https://github.com/Rich-Harris/degit)

To setup locally using degit, run the following commands:

```
npm install -g degit
degit https://github.com/ApurvaSawant11/webpack-starter your-app-name
cd your-app-name
npm install
npm start
```

> The app will run on localhost:8080

<hr />

## Development Mode Setup

- To build in development mode, run the following command

```
npm run build-dev
```

- `./dist` folder will be generated.
- Note - The build files will not be minified.

<hr />

## Production Mode Setup

- To build in development mode, run the following command

```
npm run build
```

- `./dist` folder will be generated.
- Note - The build files will be minified.
