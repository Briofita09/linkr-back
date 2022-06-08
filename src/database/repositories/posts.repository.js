import { mountQuery } from '../../services/mountQuery.service.js';
import { db } from '../db.js';

export const create = async (post) => {
    const result = await db.query(
        'INSERT INTO posts ("userId", text, url) VALUES ($1, $2, $3)',
        [post.userId, post.text, post.url]
    );
    return result.rows[0];
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