const fs = require("fs");
const { exit } = require("process");
const logger = require("./logger");

class ErrorHandler {
  constructor(){
    // logger.log("ErrorHandler initialized", __filename)
  }
  isFile(filepath) {
    try {
      if (fs.existsSync(filepath)) return true;
      else throw new Error("existsSync(filepath) is false")
    }
    catch(error) {
      logger.err("filepath is not a file or doesn't exist", __filename)
    }
    exit(1)
  }
}

module.exports = new ErrorHandler();
