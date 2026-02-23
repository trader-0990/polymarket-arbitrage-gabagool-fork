import chalk from "chalk";
import { config } from "../config";

/** ISO timestamp in brackets, matching log format: [2026-02-04T09:30:03.775Z] */
const prefix = () => `[${new Date().toISOString()}]`;

export const logger = {
  title: (msg: string) =>
    console.log(`${prefix()} ${chalk.blueBright.bold(msg)}`),

  success: (msg: string) =>
    console.log(`${prefix()} ${chalk.greenBright(msg)}`),

  warning: (msg: string) =>
    console.log(`${prefix()} ${chalk.yellow(msg)}`),

  info: (msg: string) =>
    console.log(`${prefix()} ${chalk.cyan(msg)}`),

  error: (msg: string, error?: Error | unknown) => {
    let errorMsg = msg;
    if (error) {
      const errorStr = error instanceof Error ? error.message : String(error);
      errorMsg = `${msg}: ${errorStr}`;
    }
    console.log(`${prefix()} ${chalk.redBright.bold(errorMsg)}`);
  },

  debug: (msg: string) => {
    if (config.debug) {
      console.log(`${prefix()} ${chalk.magenta(msg)}`);
    }
  }
};
