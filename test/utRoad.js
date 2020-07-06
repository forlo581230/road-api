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

    describe('GET', function() {
        for (let i = 0; i < queryList.length; i++) {
            it(`respond 200 if /road query${i} successfully`, function(done) {
                request(app)
                    .get('/road')
                    .query(Object.assign({ key: '123' }, queryList[i].q))
                    .expect(200)
                    .end(function(err, res) {
                        if (err) return done(err);
                        assert.equal(res.body.status.type, 'ok');
                        assert.equal(res.body.data.speedLimit, queryList[i].ans.speedLimit);
                        assert(res.body.data.constructor, Object);
                        done();
                    })
            });
        }

    });
}