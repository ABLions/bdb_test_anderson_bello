module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Liebedich13*",
    DB: "bdb_test",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};