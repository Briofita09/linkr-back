import { db } from '../db.js';

export const create = async (post_id, trends) => {
    let string_values = '';

    const values = [];
    
    trends.forEach((trend, index) => {
        string_values += `($${values.length + 1}, $${values.length + 2})${index === trends.length - 1 ? '' : ','}`;
        values.push(post_id);
        values.push(trend.id);
    })

    const { rows } = await db.query(
        `INSERT INTO posts_trends ("postId","trendId") VALUES ${string_values} RETURNING *`,
        values
    );

    return rows
}