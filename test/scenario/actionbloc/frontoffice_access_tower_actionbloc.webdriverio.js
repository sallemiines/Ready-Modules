const common = require('../../common.webdriverio');
const globals = require('../../globals.webdriverio.js');

describe('Front Office Access', function() {
    it('Click on Front Office button', function(done) {
        global.fctname = this.test.title;
        common.getClient()
        .waitForExist(globals.selector.dashboard_backoffice_btn, 180000)
        .waitForExist(globals.selector.dashboard_frontoffice_btn, 180000)
        .click(globals.selector.dashboard_frontoffice_btn)
        .pause(10000)
        .call(done);
    });
});