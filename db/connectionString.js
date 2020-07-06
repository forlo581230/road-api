var connectionString = {};

const IP = 'localhost';
connectionString.IP = IP;
connectionString.Setting = `mongodb://${IP}:27017/Setting`;
connectionString.Path = `mongodb://${IP}:27017/Path`;
connectionString.Record = `mongodb://${IP}:27017/Record`;
connectionString.mongoOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    poolSize: 2,
    socketTimeoutMS: 30000,
};
module.exports = connectionString;