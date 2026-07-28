//server express
import express , { type Express, type Request, type Response } from 'express';
import cors from 'cors'

const app: Express = express();
const router = express.Router()
const port = 3000;
express.json();

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});