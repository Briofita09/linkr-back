import { mountQuery } from '../../services/mountQuery.service.js';
import { db } from './../db.js';

export const create = async (user) => {
    const result = await db.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
        // 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id',
        [user.name, user.email, user.password]
    );
    return result.rows[0];
}

export const findById = async (id) => {
    const result = await db.query(
        'SELECT * FROM users WHERE id = $1',
        [id]
    );
    return result.rows[0];
}

export const findOne = async (conditionals, type) => {
    let { query, values } = mountQuery('users', conditionals, type)

    query += ' LIMIT 1'

    const result = await db.query(query, values);

    return result.rows.length > 0 ? result.rows[0] : null
}
