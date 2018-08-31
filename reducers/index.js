const winston = require('winston');
const { ADD_SHELL_CONFIG, ADD_SHELL_COMMANDS } = require('../actions');
const yargs = require('@devly/devly-cli');
const Shell = require('../scripts/shell');
const shell = new Shell();
const initialState = {};
winston.cli();

function addShellConfig(state, config){
  return {...state, ...config};
}

function addShellCommands(state){
  yargs.command('shell init','Add exports to the beginning of your shell profile (i.e. .bash_profile, .zshrc, or .bashrc).',
    {
      force: {
        alias: 'f',
        default: false,
      },
    },
    function handler(argv) {
      winston.log('info','Initializing Shell!');
      shell.init(argv.force);
    }
  );
  return state;
}

module.exports = function apacheReducer(state = initialState, action){
  switch (action.type) {
    case ADD_SHELL_CONFIG:
      return addShellConfig(state, action.config);
    case ADD_SHELL_COMMANDS:
      return addShellCommands(state);
    default:
      return state;
  }
}
