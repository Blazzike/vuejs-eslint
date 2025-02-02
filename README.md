# eslint-config-alsojames

[![npm version](https://badge.fury.io/js/eslint-config-airbnb-base.svg)](http://badge.fury.io/js/eslint-config-airbnb-base)

## Usage

Exports two ESLint configurations for your usage.

### eslint-config-alsojames

The default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-alsojames@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-alsojames
  ```

  If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
  Otherwise, run `npm info "eslint-config-alsojames-base@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.


  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=eslint-config-alsojames;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev eslint-config-alsojames eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-alsojames
  ```

  The cli will produce and run a command like:

  ```sh
  npm install --save-dev eslint-config-alsojames eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `"extends": "eslint-config-alsojames"` to your .eslintrc.

### eslint-config-alsojames/legacy

Lints ES5 and below. Requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-alsojames@latest" peerDependencies
  ```

  Linux/OSX users can run
  ```sh
  (
    export PKG=eslint-config-alsojames;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev eslint-config-alsojames eslint@^3.0.1 eslint-plugin-import@^1.10.3
  ```

2. Add `"extends": "eslint-config-alsojames/legacy"` to your .eslintrc

### eslint-config-alsojames/whitespace

This entry point only errors on whitespace rules and sets all other rules to warnings. View the list of whitespace rules [here](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/whitespace.js).

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
