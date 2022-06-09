import { mountQuery } from '../../services/mountQuery.service.js';
import { db } from '../db.js';

export const create = async (post) => {
    await db.query(
        'INSERT INTO posts ("userId", text, url) VALUES ($1, $2, $3)',
        [post.userId, post.text, post.url]
    );
    return true
}

export const findAll = async (conditionals, type) => {
    let { query, values } = mountQuery('posts', conditionals, type)

    const result = await db.query(query, values);

    return result.rows;
}

export const findOne = async (conditionals, type) => {
    let { query, values } = mountQuery('posts', conditionals, type)

    query += ' LIMIT 1'

    const result = await db.query(query, values);

    return result.rows.length > 0 ? result.rows[0] : null
}

export const update = async (post) => {
    await db.query(`UPDATE posts SET text = $1, url = $2 WHERE id = $3`, [post.text, post.url, post.id]);
    return true;
}

export const deleteById = async (id) => {
    await db.query(`DELETE FROM posts WHERE id = $1`, [id]);
    return true;
}