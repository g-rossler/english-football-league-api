import express, {Express, Request, Response} from 'express'
import * as dotenv from 'dotenv' 
import * as fs from "fs";

dotenv.config()

const app: Express = express()
const port = process.env.PORT;

app.get('/', (_req: Request, res: Response) => {
  const teamsFile = fs.readFileSync('./data/teams.json');
  res.setHeader('Content-Type', 'application/json');
  res.send(teamsFile)
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});