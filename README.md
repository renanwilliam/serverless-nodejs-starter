# Serverless Node.js Starter

A Serverless starter that adds ES6, TypeScript, linting, and unit test support. Part of
the [Serverless Stack](http://serverless-stack.com) guide.

[Serverless Node.js Starter](https://github.com/renanwilliam/serverless-nodejs-starter) uses
the [serverless-esbuild](https://github.com/floydspace/serverless-esbuild) plugin. It supports:

- **Generating optimized Lambda packages with Webpack**
- **Using ESNext or TypeScript in your handler functions**
- **Support for unit tests**
  - Run `yarn run test` to run your tests
- **Sourcemaps for proper error messages**
  - Error message show the correct line numbers
  - Works in production with CloudWatch
- **Lint your code with ESLint**
- **No need to manage Webpack or Babel configs**

---

### Requirements

- [Install the Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

### Installation

To create a new Serverless project.

``` bash
$ serverless install --url https://github.com/renanwilliam/serverless-nodejs-starter --name my-project
```

Enter the new directory

``` bash
$ cd my-project
```

Install the Node.js packages

``` bash
$ yarn install
```

### Usage

Deploy your project

``` bash
$ serverless deploy
```

Deploy a single function

``` bash
$ serverless deploy function -f hello
```

#### Running Tests

Run your tests using

``` bash
$ npm run test
```

We use Jest to run our tests. You can read more about setting up your
tests [here](https://facebook.github.io/jest/docs/en/getting-started.html#content).

#### Bundle

We use [serverless-esbuild](https://github.com/floydspace/serverless-esbuild) to create the bundle. It works with
Typescript and Javascript projects.

#### Formatting

We use [Prettier](https://prettier.io/) to format your code via `npm run prettier-format`.

#### Linting

We use [Typescript ESLint](https://typescript-eslint.io/) to lint your code via `npm run eslint`.

### Support

- Open a [new issue](https://github.com/renanwilliam/serverless-nodejs-starter/issues/new) if you've found a bug or have
  some suggestions.
- Or submit a pull request!
