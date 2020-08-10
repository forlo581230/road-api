var debug = require('debug')('road:route_post');
var express = require('express');
var router = express.Router();

const RecordDB = require('./db/RecordDB');

router.post('/insertRoad', async function(req, res) {
    RecordDB.OverSpeedRecord.insertMany(req.body.list, function(err, values) {
        try {
            if (err) {
                throw err;
            } else {
                let num = values.map(x => x._id);
                res.status(200).send({ num: num.length });
            }
        } catch (e) {
            console.error(e);
        }

    });
});


module.exports = router;