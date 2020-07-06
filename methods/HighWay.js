const HIGHWAY_NAME_LIST = ["國1", "國2", "國3", "國3", "國4", "國5", "國6", "國8", "國10"];

/**
 * 檢查地點是否在高速公路上面
 * @param {string} name - 道路名稱 
 */
function checkRoadNameOnHighWay(name) {
    let idx = name.indexOf('-');

    if (idx == -1) {
        return false;
    } else {
        return true;
    }
}

/**
 * 取得在高速公路的速限
 * @param {string} name - 道路名稱 
 */
function getHighWaySpeedLimit(name) {
    // console.log(name);
    let sp = name.split('-');
    let highWayName = null;
    let sectionValue = parseFloat(sp[1].substring(0, sp[1].length - 1));

    for (let v of HIGHWAY_NAME_LIST) {
        let idx = sp[0].indexOf(v);
        if (idx != -1) {
            highWayName = v;
            break;
        }
    }
    // console.log(highWayName, sectionValue);

    return getHighWaySectionSpeedLimit(highWayName, sectionValue);
}

/**
 * 取得該高速公路路段的速限
 * @param {string} name - 道路名稱 
 */
function getHighWaySectionSpeedLimit(highWayName, sectionValue) {
    // "國1", "國2", "國3", "國3", "國4", "國5", "國6", "國8", "國10"\
    let speedLimit = null;

    try {
        switch (highWayName) {
            case "國1":
                if (0 < sectionValue && sectionValue < 154)
                    speedLimit = 100;
                else if (154 < sectionValue && sectionValue < 356)
                    speedLimit = 110;
                else if (356 < sectionValue && sectionValue < 371)
                    speedLimit = 100;
                else if (371 < sectionValue && sectionValue < 372)
                    speedLimit = 80;
                else
                    speedLimit = 60;
                break;
            case "國2":
                return 100;
            case "國3":
                if (0 < sectionValue && sectionValue < 35)
                    speedLimit = 90;
                else if (35 < sectionValue && sectionValue < 43)
                    speedLimit = 100;
                else
                    speedLimit = 110;
                break;
            case "國4":
                speedLimit = 100;
                break;
            case "國5":
                if (0 < sectionValue && sectionValue < 15)
                    speedLimit = 80;
                else
                    speedLimit = 90;
                break;
            case "國6":
                speedLimit = 100;
                break;
            case "國8":
                if (0 < sectionValue && sectionValue < 4)
                    speedLimit = 80;
                else
                    speedLimit = 100;
                break;
            case "國10":
                if (0 < sectionValue && sectionValue < 6)
                    speedLimit = 80;
                else
                    speedLimit = 100;
                break;
            default:
                throw ("不存在的國道名稱，可能是省道或縣道。");
        }
    } catch (error) {
        console.error(error);
    }


    return speedLimit;
}

module.exports.getHighWaySpeedLimit = getHighWaySpeedLimit;
module.exports.checkRoadNameOnHighWay = checkRoadNameOnHighWay;