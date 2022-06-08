export function mountQuery(table, conditionals, type) {
    let query = `SELECT * FROM ${table}`;
    let values = []

    conditionals.forEach((cond, index) => {
        query += `${index !== 0 ? type : ''} WHERE "${cond.attr}" = $${values.length + 1}`
        values.push(cond.value)
    })

    return { query, values }
}