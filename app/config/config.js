//json app configuration data
module.exports = {
    PORT: process.env.PORT || 27017,
    DB: process.env.DB || 'mongodb://localhost/userData'
}