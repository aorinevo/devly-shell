# Introduction

Shell plugin for `@devly`.

# Installation

To add devly-shell plugin to your project, first make sure your project is set-up to consume Devly plugins (see https://github.com/aorinevo/devly-example#introduction).


Next, install `@devly/devly-shell`:

```bash
npm i @devly/devly-shell
```

# Integration

Use `addShellConfig` action creator to update the shell state in the devly-store.  It is recommneded to place the initialState for shell in a `manifests/shell.js` file and requiring that file within the file that dispatches the action.

```js
// mainfests/shell.js

module.exports = {
  path: '/Users/aorinevo/.zshrc',
  exports: [
    {
      name: 'JAVA_HOME',
      value: '/Library/Java/JavaVirtualMachines/jdk1.8.0_162.jdk/Contents/Home'
    },
    {
      name: 'MAVEN_HOME',
      value: '/usr/local/Cellar/maven/3.5.4/libexec'
    },
    {
      name: 'MAVEN_OPTS',
      value: '-Xmx1024m -Xms1024m -XX:MaxPermSize=1162m'
    },
    {
      name: 'M2_OPTS',
      value: '$MAVEN_OPTS'
    },
    {
      name: 'PATH',
      value: '$MAVEN_HOME/bin:$JAVA_HOME/bin:$PATH'
    }
  ],
};
```

It is recommended that the consumer create a `plugins/index.js` barrel file for the devly plugins it consumes.

```js
// plugins/index.js

require('./shell.js');

// plugins/shell.js
const {store} = require('@devly/devly-store');
const {addShellConfig, addShellCommands} = require('@devly/devly-shell/actions');
const {dispatch} = store;

require('@devly/devly-shell');

dispatch(addShellConfig(require('./manifests/shell')));

dispatch(addShellCommands());
```
