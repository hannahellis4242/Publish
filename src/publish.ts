import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { init } from "./init";

yargs(hideBin(process.argv))
  .command(
    "init [title]",
    "create empty ebook with title",
    (yargs) => {
      return yargs.positional("title", {
        describe: "title of the book",
        default: "NewBook",
      });
    },
    (argv) => {
      init(argv.title);
    }
  )
  .parse();
