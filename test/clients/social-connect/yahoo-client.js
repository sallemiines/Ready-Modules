const { getClient } = require('../../common.webdriverio');
const { selector } = require('../../globals.webdriverio.js');
const { external } = require('../../external_globals.webdriverio.js');
const SocialConnect = require('./social-connect.js');

class UpdateYahooConfiguration extends SocialConnect{

    constructor() {
        super();
        this.client = getClient();
    }
    
}

module.exports = UpdateYahooConfiguration;

