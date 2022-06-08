import { db } from "../database/db.js";
import fs from "fs";
import path from "path";

const execute = async () => {
  console.log("\nDropando o Banco...\n");

  const __dirname = path.resolve(path.dirname(""));
  const sql = fs.readFileSync(__dirname + "\\src\\database\\migration\\down.sql", { encoding: "UTF-8" });
  await db.query(sql);
};

execute()
  .then(() => console.log("Banco de dados dropado com sucesso\n"))
  .catch((err) => console.log({ error: err, message: "Erro ao dropar banco de dados" },'\n'));

