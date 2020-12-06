//json app configuration data
module.exports = {
    PORT: process.env.PORT || 3000,
    DB: process.env.DB || 'mongodb://localhost:27017/data-user',
    Secret: process.env.Secret || 'administrador123'
}