const { getClient } = require('../../common.webdriverio');
const { selector } = require('../../globals.webdriverio.js');

describe('Action Bloc: Disconnect from the dashboard', function () {
    it('Disconnect from the dashboard', function (done) {
        global.fctname = this.test.title;
        getClient()
            .click(selector.dashboard_profilname_link)
            .pause(500)
            .click(selector.dashboard_disconnect_link)
            .call(done);
    });

});