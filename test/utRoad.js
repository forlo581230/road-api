const request = require('supertest');
const chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = require('chai').expect;

exports.test = (app) => {
    const queryList = [{
            q: {
                name: '環漢路二段',
                city: '新北市',
                town: '新莊區'
            },
            ans: {
                speedLimit: 50
            }
        }, {
            q: {
                city: '台北市',
                town: '內湖區',
                name: '瑞光路120巷1號'
            },
            ans: {
                speedLimit: null
            }
        }, {
            q: {
                city: '新北市',
                town: '鶯歌區',
                name: '國華路75號'
            },
            ans: {
                speedLimit: 50
            }
        }, {
            q: {
                city: '新北市',
                town: '三峽區',
                name: '介壽路一段384號'
            },
            ans: {
                speedLimit: 50
            }
        }, {
            q: {
                city: '台北市',
                town: '內湖區',
                name: '國1汐五-14.8K'
            },
            ans: {
                speedLimit: 100
            }
        }, {
            q: {
                city: '新北市',
                town: '板橋區',
                name: '台64八里新店線-3K'
            },
            ans: {
                speedLimit: 60
            }
        }, {
            q: {
                city: '新北市',
                town: '土城區',
                name: '國3-38.2K'
            },
            ans: {
                speedLimit: 100
            }
        }


    ];
    // 
    // 新北市土城區中央路四段349巷2號

    describe('GET road', function() {
        for (let i = 0; i < queryList.length; i++) {
            it(`respond 200 if /road get ${JSON.stringify(queryList[i].q)} successfully`, function(done) {
                request(app)
                    .get('/get/road')
                    .query(Object.assign({ key: '123' }, queryList[i].q))
                    .expect(200)
                    .end(function(err, res) {
                        if (err) return done(err);
                        assert.equal(res.body.status.type, 'ok');
                        assert.equal(res.body.data.speed, queryList[i].ans.speedLimit);
                        assert(res.body.data.constructor, Object);
                        done();
                    })
            });
        }

    });

    describe('POST insertRoad', function() {
        it(`respond 200 if /insertRoad post successfully`, function(done) {
            request(app)
                .post('/post/insertRoad')
                // .set('Content-Type', 'application/json')
                .send({
                    key: '123',
                    list: [{
                        name: '忠義路一段618號',
                        city: '桃園市',
                        town: '龜山區',
                        nameType: null,
                        speedLimit: 60,
                        lat: 25.015873000000003,
                        lng: 121.3480415
                    }, {
                        name: '忠義路一段618號',
                        city: '桃園市',
                        town: '龜山區',
                        nameType: null,
                        speedLimit: 60,
                        lat: 25.015873000000003,
                        lng: 121.3480415
                    }]
                })
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);
                    console.log(res.body);
                    // assert(res.body.constructor, Number);
                    assert.equal(res.body.num, 2);
                    done();
                })
        });


    });
}