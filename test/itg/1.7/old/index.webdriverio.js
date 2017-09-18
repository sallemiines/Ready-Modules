'use strict';
var should = require('should');
var common = require('./common.webdriverio');
//var i=1;


describe('Allscenario', function () {



    common.initMocha.call(this);

    before(function (done) {
        this.client = common.getClient();
        this.client.call(done);
    });

    after(function (done) {
        this.client
            .end()
            .call(done);
    });

 
    //require('./scenario/FO/create_shop_tower.webdriverio');
    require('./scenario/FO/create_slow_60shops_tower.webdriverio');
    //require('./scenario/FO/actionbloc/create_shop_tower_actionbloc.webdriverio');
    //require('./scenario/FO/actionbloc/disconnect_tower_actionbloc.webdriverio');


});
