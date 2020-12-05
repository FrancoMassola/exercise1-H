//json app configuration data
module.exports = {
    PORT: process.env.PORT || 27017,
    DB: process.env.DB || 'mongodb://localhost:27017/userData'
}