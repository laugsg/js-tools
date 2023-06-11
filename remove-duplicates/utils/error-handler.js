const fs = require("fs");
const colors = require("colors");
const { exit } = require("process");
const logger = require("./logger");

class ErrorHandler {
  constructor(){
    // logger.log("ErrorHandler initialized", __filename)
  }
  isFile(filepath) {
    if (fs.existsSync(filepath)) return true;
    logger.err("filepath is not a file", __filename)
    exit(1)
  }
}

module.exports = new ErrorHandler();
