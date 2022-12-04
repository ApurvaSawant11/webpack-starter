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

### 2. Using [degit](https://github.com/Rich-Harris/degit)

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

## Caching Implementation

Caching functionalities are implemented in the following two ways:

### 1. Caching using `[contenthash]`

- Webpack provides a way to use [filename substitutions](https://webpack.js.org/guides/caching/#output-filenames) to insert hashes of the file content using `[contenthash]` in the filename to cache files that don't change after a build of your app.
- This webpack starter kit caches bundles by default. To change this behavior, you can updating the `webpack.config.common.js` file.

### 2. Extracting & caching third party libraries into vendor bundles

- By default, the toolkit splits and extracts third party `npm` libraries into `vendor` chunks as these are less likely to change than the source code of your app.
- This is done using the `cacheGroups` option of the [`SplitChunksPlugin`](https://webpack.js.org/plugins/split-chunks-plugin/) in `webpack.config.common.js`

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
