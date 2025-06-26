import express, { Request, Response, NextFunction, Express } from 'express';
import path from 'path';
import { Server } from 'http';
import dotenv from 'dotenv';
import kleur from 'kleur';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
const __dirname = import.meta.dirname;

// https
// import https from 'https';

// custom error object to use status code
import { HttpError } from './interfaces/httpError.ts';
import { formatError } from './utils/util.ts';

// --- DATABASE CONFIG --- //

import client from '../prisma/instance.ts';

dotenv.config();

// const privateKey = fs.readFileSync(path.join(__dirname, '..', 'server.key'));
// const certificate = fs.readFileSync(path.join(__dirname, '..', 'server.cert'));

const app: Express = express();

// --- MIDDLEWARES --- //

// Security
app.use(cors());
app.use(helmet());

app.use(
  compression(
    compression({
      level: 6, // Compression level (0-9)
      threshold: '1kb', // Minimum response size to compress
    })
  )
);

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application settings
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static(path.join(__dirname, 'public')));

// --- ROUTES --- //
import authRoutes from './routes/authRoutes.ts';
import testRoutes from './routes/testRoutes.ts';

app.use('/auth', authRoutes);
app.use('/test', testRoutes);

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).json({
    message: err.message || 'UNKONWN ERROR',
    stack: err.stack ? formatError(err.stack) : 'NO STACK',
  });
});

// --- DATABASE CONNECTION --- //

try {
  await client.$connect();
  console.log(kleur.bgWhite('DATABASE CONNECTED SUCCESSFULLY'));
} catch (err) {
  console.log(kleur.bgRed('ERROR OCCURED CONNECTING TO DATABASE'));
  console.log(err);
}

// --- SERVER INITIALIZATION --- //

let server: Server;

try {
  // server = https.createServer({ key: privateKey, cert: certificate }, app).listen(process.env.SERVER_PORT);
  server = app.listen(process.env.SERVER_PORT);
  console.log(kleur.bgGreen(`RUNNING ON PORT ${process.env.SERVER_PORT}`));
} catch (err) {
  console.log(kleur.bgRed('ERROR OCCURED WHILE RUNNING SERVER'));
  console.log(err);
}

// --- GRACEFUL SHUTDOWN --- //

const shutdown = async () => {
  await client.$disconnect();

  if (server) {
    server.close(() => {
      console.log(kleur.bgRed('SERVER CLOSED'));
      process.exit(0);
    });
  }
};

process.on('SIGINT', shutdown);
process.on('SIGTSTP', shutdown);

export default app;
