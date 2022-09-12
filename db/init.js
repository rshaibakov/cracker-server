console.log('Started Adding the Users.')

db = db.getSiblingDB(process.env.DB_NAME)
db.createUser({
  user: process.env.DB_USERNAME,
  pwd: process.env.DB_PASSWORD,
  roles: [{ role: 'readWrite', db: process.env.DB_NAME }]
})

console.log('End Adding the Users.')
