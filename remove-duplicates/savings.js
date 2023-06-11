#!/usr/bin/env node

const { version } = require("./package.json");
const { program } = require("commander");
const Lists = require("./libs/lists");

program
  .version(version)
  .command("rm")
  .description("remove data from lists")
  .option(
    "-d, --duplicates",
    "returns a new file without matched if any word is matched"
  )
  .option(
    "-c, --clean",
    "returns a new file with only one sample of the matched words if any word is matched"
  )
  .argument("<file>", "word's list source")
  .action((file, options) => {
    Lists.duplicates(file, options)
  });

program.parse(process.argv);
