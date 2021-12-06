import { Credentials } from "../interfaces/Credentials";

import { logHandler } from "./logHandler";

/**
 * Module to validate environment variables and create a credentials object to
 * pass to various helpers.
 *
 * @returns {Credentials} An object containing the credentials needed for the tool.
 */
export const validateEnv = (): Credentials => {
  if (!process.env.GITHUB_TOKEN) {
    logHandler.log("error", "Missing GitHub credentials.");
    process.exit(1);
  }

  if (!process.env.GHOST_KEY) {
    logHandler.log("error", "Missing Ghost credentials.");
    process.exit(1);
  }

  return {
    githubToken: process.env.GITHUB_TOKEN,
    ghostKey: process.env.GHOST_KEY,
  };
};
