'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');
//modif
var webdriverio = require('webdriverio');
//var parent = webdriverio.getWindowHandle();
//var driver = webdriverio.getWindowHandles();
//

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



    it('Access to backoffice', function (done) {
        global.fctname = this.test.title;
        this.client
            .waitForExist(this.selector.dashboard_backoffice_btn, 180000)
            .waitForExist(this.selector.dashboard_frontoffice_btn, 180000)
            .click(this.selector.dashboard_backoffice_btn)
            .pause(10000)
            .call(done);
    });

/*    it('Verify that we are on backoffice and close onboarding popup', function (done) {
        //modif
        driver.switchTo().window(windows[1]);
        //
        global.fctname = this.test.title;
        
        this.client
            .waitForExist(this.selector.backoffice_startonboarding_btn, 180000)
            .waitForExist(this.selector.backoffice_lateronboarding_btn, 180000)
            .waitForExist(this.selector.backoffice_closeonboarding_btn, 180000)
            .click(this.selector.backoffice_closeonboarding_btn)
            .pause(10000)
            .call(done);
    }); */
      

});