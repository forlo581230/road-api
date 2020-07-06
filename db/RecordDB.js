'use strict'

var mongoose = require('mongoose');
var connectionString = require('../db/connectionString');

var OverSpeedRecordSchema = require('../db/schema/overSpeedRecord');


var conn = mongoose.createConnection(connectionString.Record, connectionString.mongoOptions);
conn.model('OverSpeedRecord', OverSpeedRecordSchema);


module.exports = {
    OverSpeedRecord: conn.models['OverSpeedRecord'],
    close: function() {
        // for (let c of this.conn.modelNames()) {
        //     delete this.conn.models[c];
        //     delete this.conn.base.modelSchemas[c];
        // }
        // for (let key in this.conn.collections)
        //     delete this.conn.collections[key];
        // conn.close();
    },
};