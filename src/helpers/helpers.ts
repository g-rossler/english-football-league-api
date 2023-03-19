import * as fs from "fs";

export function getTeams() {
  const teamsFile = fs.readFileSync("./data/teams.json");
  return JSON.stringify(teamsFile);
}
