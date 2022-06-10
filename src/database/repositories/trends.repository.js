import { db } from '../db.js';

export const create = async (trends) => {
    let string_values = '';

    const values = [];
    trends.forEach((trend) => {
        string_values += `($${values.length + 1})${values.length === trends.length - 1 ? '' : ','}`;
        values.push(trend);
    })
    const { rows } = await db.query(
        `INSERT INTO trends ("name") VALUES ${string_values} RETURNING *`,
        values
    );

    return rows
}