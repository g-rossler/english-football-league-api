import * as fs from "fs";
import { getTeams } from "../helpers/helpers";

export function getTeamsList() {
    return getTeams()
}