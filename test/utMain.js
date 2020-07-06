var app = require('../app');

describe('API', function() {
    describe('Road', function() {
        require('./utRoad').test(app);
    });
});