const fs = require("fs");
const logger = require("../utils/logger");
const ErrorHandler = require("../utils/error-handler");

class Lists {
    constructor(){
        // logger.log("Duplicates", __filename)
    }

    duplicates(file, options) {
        ErrorHandler.isFile(file);
        try {
            const data = fs.readFileSync(file, "utf8");
            let words = data.split(/\s+/);
      
            if (options.duplicates) {
              const wordCounts = {};
              words.filter((word) => {
                wordCounts[word] = (wordCounts[word] || 0) + 1;
                return wordCounts[word] === 1;
              });
              words = [];
              Object.keys(wordCounts).forEach((word) => {
                if (!(wordCounts[word] > 1)) words.push(word);
              });
            } else if (options.clean) {
              const uniqueWords = new Set();
              words = words.filter((word) => {
                if (uniqueWords.has(word)) {
                  return false;
                }
                uniqueWords.add(word);
                return true;
              });
            }
            
            // Write the output to a file
            const output = words.join("\n");
            const outputFile = `${file}_output.txt`;
            fs.writeFileSync(outputFile, output);
      
            logger.win(`Duplicates removed at ${outputFile}`);
            return true
          } catch (error) {
            logger.err("Duplicates fail", __filename, error.message);
            return false
          }
    }
    
}

module.exports = new Lists()


