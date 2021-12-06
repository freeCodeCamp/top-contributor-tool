import fetch from "node-fetch";

import { globalConfig } from "../config/globalConfig";
import { ForumContributor } from "../interfaces/forum/ForumContributor";
import { ForumData } from "../interfaces/forum/ForumData";
import { logHandler } from "../utils/logHandler";
import { sleep } from "../utils/sleep";

const parseForumData = (data: ForumData): ForumContributor[] => {
  const contributors: ForumContributor[] = [];
  for (const item of data.directory_items) {
    const contributor: ForumContributor = {
      username: item.user.username,
      name: item.user.name,
      likes: item.likes_received,
      url: `https://forum.freecodecamp.org/u/${item.user.username}`,
    };
    contributors.push(contributor);
  }
  return contributors;
};

/**
 * Module to fetch contributor data from the forum, based on number of liked posts,
 * and parse it into a JSON format with the name, username, likes, and profile url.
 *
 * @returns {Promise<ForumContributor[]>} A parsed list of forum contributors.
 */
export const getForumData = async (): Promise<ForumContributor[]> => {
  try {
    let page = 0;
    let rawData = await fetch(
      `https://forum.freecodecamp.org/directory_items.json?order=likes_received&period=yearly&page=${page}`
    );

    const totalData: ForumData = await rawData.json();

    let parsedData = totalData;

    while (
      parsedData.directory_items[parsedData.directory_items.length - 1]
        .likes_received > globalConfig.minimumLikes
    ) {
      await sleep(3000);
      rawData = await fetch(
        `https://forum.freecodecamp.org/directory_items.json?order=likes_received&period=yearly&page=${++page}`
      );
      parsedData = await rawData.json();

      totalData.directory_items.push(...parsedData.directory_items);
    }

    return parseForumData(totalData);
  } catch (err) {
    logHandler.log("error", err);
    process.exit(1);
  }
};
