import express, {Express, Request, Response} from 'express'
import * as dotenv from 'dotenv' 
import { Team } from './types';
import { getTeamsList } from './service/service';
import * as fs from "fs";

dotenv.config()

const app: Express = express()
const port = process.env.PORT;

app.get('/', (_req: Request, res: Response) => {
  const teamsList = getTeamsList()
  res.setHeader('Content-Type', 'application/json');
  res.send(teamsList)
})

app.get('/team/:id',  (req: Request, res: Response) => {
  const requestedTeamId = Number(req.params.id);
  const teamsFile = fs.readFileSync('./data/teams.json');
  const teamsFileParse = JSON.parse(teamsFile.toString());
  const team = teamsFileParse.find((team: Team) => team.id === requestedTeamId)
  res.setHeader('Content-Type', 'application/json');
  res.send(team)
})

app.get('/team/:id/delete',  (req: Request, res: Response) => {
  const requestedTeamId = Number(req.params.id);
  const teamsFile = fs.readFileSync('./data/teams.json');
  const teamsFileParse = JSON.parse(teamsFile.toString());
  const newTeamList = teamsFileParse.filter((team: Team) => team.id !== requestedTeamId)
  fs.writeFileSync('./data/teams.json', JSON.stringify(newTeamList));
  res.setHeader('Content-Type', 'application/json');
  res.send({data: `Team ${requestedTeamId} deleted`})
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});