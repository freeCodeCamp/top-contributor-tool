import { getForumData } from "./modules/getForumContributions";
import { getGitHubContributions } from "./modules/getGitHubContributions";
import { getNewsData } from "./modules/getNewsContributions";
import { logHandler } from "./utils/logHandler";
import { validateEnv } from "./utils/validateEnv";
import { writeData } from "./utils/writeData";

(async () => {
  logHandler.log("debug", "Validating environment variables...");

  const credentials = validateEnv();

  logHandler.log("debug", "Environment variables are valid.");

  logHandler.log("debug", "Fetching GitHub Data");

  const github = await getGitHubContributions(credentials);

  logHandler.log("debug", "Writing GitHub Data");

  await writeData(github, "GitHub", "github");

  logHandler.log("debug", "Fetching Forum Data");

  const forum = await getForumData();

  logHandler.log("debug", "Writing Forum Data");

  await writeData(forum, "Forum", "forum");

  logHandler.log("debug", "Fetching News Data");

  const news = await getNewsData(credentials);

  logHandler.log("debug", "Writing News Data");

  await writeData(news, "News", "news");

  logHandler.log("debug", "Process complete! Have a great day! :)");
})();
