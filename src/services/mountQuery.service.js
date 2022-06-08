export function mountQuery(conditionals, type) {
    let query = `SELECT * FROM ${table}`;
    let values = []

    conditionals.forEach((cond, index) => {
        query += `${index !== 0 ? type : ''} WHERE "$${values.length + 1}" = $${values.length + 2}`
        values.push(cond.attr)
        values.push(cond.value)
    })

    return { query, values }
}