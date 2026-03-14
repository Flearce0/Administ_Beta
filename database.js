const fs = require('fs')
const sql = fs.readFileync('dataframe.sql', 'utf8')

const Datas = require('better-sqlite3')
const db = new Datas('database.db')

db.exec(sql)

module.exports = db