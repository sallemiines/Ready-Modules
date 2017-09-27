const { getClient } = require('../../common.webdriverio');
const { selector } = require('../../globals.webdriverio.js');

describe('BackOffice Access', function() {
    it('Click on Back Office button', function(done) {
        global.fctname = this.test.title;
        getClient()
        .waitForExist(selector.dashboard_backoffice_btn, 180000)
        .waitForExist(selector.dashboard_frontoffice_btn, 180000)
        .click(selector.dashboard_backoffice_btn)
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