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

 
    //require('./scenario/FO/login_out_shop_tower.webdriverio');
    //********robustness******
    //require('./scenario/FO/test_robustesse/create_slow_60shops_tower.webdriverio');
    //require('./scenario/FO/test_robustesse/create_100shops_tower.webdriverio');

    //*******action bloc******
    require('./scenario/FO/actionbloc/create_shop_tower_actionbloc.webdriverio');
    //require('./scenario/FO/actionbloc/connect_tower_actionbloc.webdriverio');
    //require('./scenario/FO/actionbloc/disconnect_tower_actionbloc.webdriverio');
    require('./scenario/FO/actionbloc/frontoffice_access_tower_actionbloc.webdriverio');
    //require('./scenario/FO/actionbloc/backoffice_access_tower_actionbloc.webdriverio');



});
