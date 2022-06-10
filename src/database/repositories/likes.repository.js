import { db } from "../db.js";

export async function create({ id, postId }) {
  const result = await db.query(
    `
        INSERT INTO likes ("userId", "postId") VALUES ($1, $2)
    `,
    [id, postId]
  );
  return result.rows[0];
}

export async function getAll(postId) {
  const result = await db.query(
    `
      SELECT * FROM likes WHERE "postId" = $1
  `,
    [postId]
  );
  return result.rows.length;
}
