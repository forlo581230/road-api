// var re = new RegExp('號$');
// // {address:{$regex:/\d+號/}}
// let gg = "新北市新莊區新莊路107號".replace(/\d+號/g, "");

// console.log(gg);

let request = require('request');

// let newITTSNearestRoadList = [{
//     name: '忠義路一段618號',
//     city: '桃園市',
//     town: '龜山區',
//     nameType: null,
//     speedLimit: 60,
//     lat: 25.015873000000003,
//     lng: 121.3480415
// }, {
//     name: '忠義路一段618號',
//     city: '桃園市',
//     town: '龜山區',
//     nameType: null,
//     speedLimit: 60,
//     lat: 25.015873000000003,
//     lng: 121.3480415
// }];


// request({
//         method: 'POST',
//         uri: 'http://localhost:3000/post/insertRoad',
//         body: { key: "123", list: newITTSNearestRoadList },
//         json: true
//     },
//     (error, response, body) => {
//         try {
//             if (error) {
//                 throw error;
//             } else {
//                 console.log(response.body);
//             }
//         } catch (e) {
//             console.error(e, "insert ITTSNearestRoads err");
//         }
//     }
// );