const colors = require("colors")
const path = require("path")

class Logger {

  log(msg, filepath = '', data = '') {
    console.log(`>>>> LOG | ${msg} ${filepath && `| ${path.basename(filepath)} `}| ${new Date().toISOString()}`.blue);
    if (data) console.log(data);
  }

  msg(msg, filepath = '') {
    console.info(`>>>> ${msg} ${filepath && `| ${path.basename(filepath)} `}| ${new Date().toISOString()}`.cyan);
  }

  win(msg, filepath = '') {
    console.error(`>>>> SUCCESS | ${msg} ${filepath && `| ${path.basename(filepath)} `}| ${new Date().toISOString()}`.green);
  }

  err(msg, filepath = '') {
    console.error(`>>>> ERROR | ${msg} ${filepath && `| ${path.basename(filepath)} `}| ${new Date().toISOString()}`.red);
  }
}

module.exports = new Logger();