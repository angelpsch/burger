const connection = require(`./connection`);

const orm = {
    selectAll: function (input, cb) {
        const qString = `SELECT * FROM ${input};`;
        connection.query(qString, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: function (table, cols, vals, cb) {
        const qString = `INSERT INTO ${table} (${cols.toString()}) VALUES (?)`;

        connection.query(qString, vals, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    updateOne: function (table, objColVals, condition, cb) {
        const qString = `UPDATE ${table} SET devoured = ${objColVals} WHERE ${condition}`;

        connection.query(qString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }
}

module.exports = orm;