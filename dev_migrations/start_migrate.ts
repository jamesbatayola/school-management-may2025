import db from "../src/database/index.ts";
import kleur from "kleur";
import path from "path";
import { readFile } from "fs/promises";

const __dirname = import.meta.dirname;
const query = await readFile(path.join(__dirname, "migration.sql"), "utf-8");

await db.connect();
await db.query(query);
await db.end();

console.log(kleur.bgGreen("MIGRATED SUCCESSFULLY"));
