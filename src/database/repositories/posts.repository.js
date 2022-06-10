import { mountQuery } from '../../services/mountQuery.service.js';
import { db } from '../db.js';
import { AppError } from './../../errors/appError.js';
import * as TrendsRepository from './trends.repository.js';
import * as TrendsPostsRepository from './posts_trends.repository.js';

export const create = async (post, trends) => {

    try {
        await db.query("BEGIN TRANSACTION")

        const trends_values = await TrendsRepository.create(trends);

        const { rows } = await db.query(
            'INSERT INTO posts ("userId", text, url) VALUES ($1, $2, $3) RETURNING *',
            [post.userId, post.text, post.url]
        );

        await TrendsPostsRepository.create(rows[0].id, trends_values);

        await db.query('COMMIT TRANSACTION')

        return rows
    } catch (err) {
        await db.query('ROLLBACK TRANSACTION')
        throw new AppError("Erro ao criar post", 400)
    }

}

export const findAll = async (conditionals, type) => {
    let { query, values } = mountQuery('posts', conditionals, type)

    const { rows } = await db.query(query, values);

    return rows;
}

export const findOne = async (conditionals, type) => {
    let { query, values } = mountQuery('posts', conditionals, type)

    query += ' LIMIT 1'

    const { rows } = await db.query(query, values);

    return rows.length > 0 ? rows[0] : null
}

export const update = async (post) => {
    await db.query(`UPDATE posts SET text = $1, url = $2 WHERE id = $3`, [post.text, post.url, post.id]);
    return true;
}

export const deleteById = async (id) => {
    await db.query(`DELETE FROM posts WHERE id = $1`, [id]);
    return true;
}