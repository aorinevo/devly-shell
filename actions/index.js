// Use higher order reducers here

const ADD_SHELL_CONFIG = 'ADD_SHELL_CONFIG';
const ADD_SHELL_COMMANDS = 'ADD_SHELL_COMMANDS';

function addApacheConfig (config) {
  return {
    type: ADD_SHELL_CONFIG,
    config
  }
}

function addApacheCommands (yargs) {
  return {
    type: ADD_SHELL_COMMANDS,
    yargs
  }
}


module.exports = {
  addShellConfig,
  addShellCommands,
  ADD_SHELL_CONFIG,
  ADD_SHELL_COMMANDS
}
