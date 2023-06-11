const fs = require("fs");
const logger = require("../utils/logger");
const ErrorHandler = require("../utils/error-handler");

class Lists {
  constructor() {
    // logger.log("Duplicates", __filename)
  }

  options(file, options) {
    ErrorHandler.isFile(file);
    try {
      const outputFile = `${file}_output.txt`;
      const data = fs.readFileSync(file, "utf8");
      this.words = data.split(/\s+/);

      if (options.duplicates) {
        this.output = this.duplicates();
        logger.win(`Duplicates removed at ${outputFile}`);
      } else if (options.clean) {
        this.output = this.clean();
        logger.win(`Duplicates reduced to one sample at ${outputFile}`);
      } else {
        this.output = this.duplicates();
        logger.msg(`unflaged action: duplicates removed at ${outputFile}`);
      }

      fs.writeFileSync(outputFile, this.output);

      return true;
    } catch (error) {
      logger.err("Duplicates fail", __filename);
      return false;
    }
  }

  duplicates() {
    try {
      const wordCounts = {};
      let words = this.words;
      words.filter((word) => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
        return wordCounts[word] === 1;
      });
      words = [];
      Object.keys(wordCounts).forEach((word) => {
        if (!(wordCounts[word] > 1)) words.push(word);
      });
      // output
      const output = words.join("\n");
      return output;
    } catch (error) {
      logger.err("duplicates method fails", __filename, error);
    }
  }
  clean() {
    try {
      const uniqueWords = new Set();
      let words = this.words;
      words = words.filter((word) => {
        if (uniqueWords.has(word)) {
          return false;
        }
        uniqueWords.add(word);
        return true;
      });
      // output
      const output = words.join("\n");
      return output;
    } catch (error) {
      logger.err("clean method fails", __filename, error);
    }
  }
}

module.exports = new Lists();
