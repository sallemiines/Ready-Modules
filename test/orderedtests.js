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

 
    //require('./scenario/login_out_shop_tower.webdriverio');
    //********robustness******
    //require('./scenario/test_robustesse/create_slow_60shops_tower.webdriverio');
    //require('./scenario/test_robustesse/create_100shops_tower.webdriverio');

    //*******action bloc******
    //require('./scenario/actionbloc/create_shop_tower_actionbloc.webdriverio');
    require('./scenario/actionbloc/connect_tower_actionbloc.webdriverio');
    //require('./scenario/actionbloc/disconnect_tower_actionbloc.webdriverio');
    //require('./scenario/actionbloc/frontoffice_access_tower_actionbloc.webdriverio');
    require('./scenario/actionbloc/backoffice_access_tower_actionbloc.webdriverio');



});
