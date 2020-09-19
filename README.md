# Serverless Node.js Starter

A Serverless starter that adds ES6, TypeScript, linting, and unit test support. Part of the [Serverless Stack](http://serverless-stack.com) guide.

[Serverless Node.js Starter](https://github.com/renanwilliam/serverless-nodejs-starter) uses the [serverless-bundle](https://github.com/AnomalyInnovations/serverless-bundle) plugin. It supports:

- **Generating optimized Lambda packages with Webpack**
- **Using ES6 or TypeScript in your handler functions**
- **Support for unit tests**
  - Run `npm test` to run your tests
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
$ npm install
```

### Usage

To run a function on your local

``` bash
$ serverless invoke local --function hello
```

To simulate API Gateway locally using [serverless-offline](https://github.com/dherault/serverless-offline)

``` bash
$ serverless offline start
```

Deploy your project

``` bash
$ serverless deploy
```

Deploy a single function

``` bash
$ serverless deploy function --function hello
```

#### Running Tests

Run your tests using

``` bash
$ npm test
```

We use Jest to run our tests. You can read more about setting up your tests [here](https://facebook.github.io/jest/docs/en/getting-started.html#content).

#### TypeScript

If [serverless-bundle](https://github.com/AnomalyInnovations/serverless-bundle) detects a `tsconfig.json` in your service root, it'll compile it using TypeScript.

#### Linting

We use [ESLint](https://eslint.org) to lint your code via [serverless-bundle](https://github.com/AnomalyInnovations/serverless-bundle).

You can turn this off by adding the following to your `serverless.yml`.

``` yaml
custom:
  bundle:
    linting: false
```

To [override the default config](https://eslint.org/docs/user-guide/configuring), add a `.eslintrc.json` file. To ignore ESLint for specific files, add it to a `.eslintignore` file.

### Support

- Open a [new issue](https://github.com/renanwilliam/serverless-nodejs-starter/issues/new) if you've found a bug or have some suggestions.
- Or submit a pull request!
