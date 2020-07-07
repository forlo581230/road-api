// $env:DEBUG="*"; node index.js
var debug = require('debug')('road:route');
var express = require('express');
var router = express.Router();

const roadSpeedLimit = require('./methods/roadSpeedLimit');



router.get('/road', async function(req, res) {
    // let conditions = {
    //     name: '環漢路二段',
    //     city: '新北市',
    //     town: '新莊區',
    // };

    let speedLimit = roadSpeedLimit.getHighWaySpeedLimit(
        req.query.name,
    );

    if (speedLimit === null) {
        speedLimit = await roadSpeedLimit.getSpeedLimit(
            req.query.name,
            req.query.city,
            req.query.town
        );

    }

    if (speedLimit === null) {
        res.send({
            status: {
                type: 'ok',
                message: '無資料'
            },
            data: {
                city: req.query.city,
                town: req.query.town,
                name: req.query.name,
                speed: speedLimit
            }
        });
    } else {
        res.send({
            status: {
                type: 'ok',
                message: '無資料'
            },
            data: {
                city: req.query.city,
                town: req.query.town,
                name: req.query.name,
                speed: speedLimit
            }
        });
    }

});


module.exports = router;