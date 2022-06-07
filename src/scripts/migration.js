import { db } from "../database/db.js";
import fs from "fs";
import path from "path";

const execute = async () => {
  console.log("Criando Banco");
  const __dirname = path.resolve(path.dirname(""));
  const sql = await fs.readFileSync(
    __dirname + "\\src\\database\\migration\\initial.sql"
  );
  console.log(sql);
  await db.query(sql);
  console.log("Banco Criado");
};

execute();
