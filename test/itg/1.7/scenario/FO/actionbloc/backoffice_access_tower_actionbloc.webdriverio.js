'use strict';
var should = require('should');
var common = require('../../../common.webdriverio');
var globals = require('../../../globals.webdriverio.js');
var numb = 0

describe('Ready Shop Creation ', function () {
       
    common.initMocha.call(this);
    console.log("*******************Let's have fun!!!****************");
    
    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);



    it('Open the selfcare signup page to set email', function (done) {
        global.fctname = this.test.title;
        this.client
            .waitForExist(this.selector.dashboard_backoffice_btn, 180000)
            .waitForExist(this.selector.dashboard_frontoffice_btn, 180000)
            .click(this.selector.dashboard_backoffice_btn)
            .pause(10000)
            .call(done);
    });


//}
        

});