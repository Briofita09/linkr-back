import { db } from "../db.js";

export async function create({ id, text, postId }) {
  const result = await db.query(
    `
        INSERT INTO comments ("userId", text, "postId") VALUES ($1, $2) 
    `,
    [id, text, postId]
  );
  return result.rows[0];
}

export async function getAll(postId) {
  const result = await db.query(
    `
        SELECT * FROM comments WHERE "postId" = $1
        `,
    [postId]
  );
  return result.rows;
}
