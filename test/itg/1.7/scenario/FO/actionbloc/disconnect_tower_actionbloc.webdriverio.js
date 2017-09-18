'use strict';
var should = require('should');
var common = require('../../../common.webdriverio');
var globals = require('../../../globals.webdriverio.js');

describe('Action Bloc: Disconnect from the dashboard', function () {
       
    common.initMocha.call(this);
    console.log("*******************Let's have fun!!!****************");
    
    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);


    it('Disconnect from the dashboard', function (done) {
        global.fctname = this.test.title;
//        console.log(this.dessin1);
        this.client
            .click(this.selector.dashboard_profilname_link)
            .pause(500)
            .click(this.selector.dashboard_disconnect_link)
            .call(done);
    });

    

});