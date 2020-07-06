var debug = require('debug')('road:speed');
const HighWay = require('./HighWay');
var db = require('../db/RecordDB');

/**
 * 取得高速公路速限
 * @param {string} name -(地名、道路名、地點名)
 * @returns {number}
 */
function getHighWaySpeedLimit(
    name
) {
    let speedLimit = null;
    let isOnHighWay = HighWay.checkRoadNameOnHighWay(name);

    if (isOnHighWay) {
        speedLimit = HighWay.getHighWaySpeedLimit(name);
    }

    return speedLimit;
}

/**
 * 取得道路速限
 * @param {string} name -(地名、道路名、地點名)
 * @param {string} city - 城市
 * @param {string} town - 行政區
 */
function getSpeedLimit(
    name,
    city,
    town,
) {

    return new Promise((resolve, reject) => {
        try {
            //濾除路段長度
            let idx = name.indexOf('-');
            let newName = idx != -1 ? name.substring(0, idx) : name;
            newName = newName.replace(/\d+號/g, "");

            //搜尋條件設定
            let conditions = {
                name: newName,
                city: city,
                town: town,
            };

            let proj = {
                _id: -1,
                _v: -1,
                name: 1,
                city: 1,
                town: 1,
                speedLimit: 1
            };

            debug(conditions);
            db.OverSpeedRecord.findOne(conditions, proj, function(err, value) {
                if (err) {
                    throw "db err";
                } else {
                    debug(value);
                    resolve(value !== null ? value.speedLimit : null);
                }
            });
        } catch (error) {
            console.error(error);
            reject(null);
        }
    })

}

module.exports.getHighWaySpeedLimit = getHighWaySpeedLimit;
module.exports.getSpeedLimit = getSpeedLimit;