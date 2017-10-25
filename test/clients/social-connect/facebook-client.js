const {selector} = require('../../globals.webdriverio.js');
const {external} = require('../../external_globals.webdriverio.js');
const SocialConnect = require('./social-connect.js');

class FacebookClient extends SocialConnect {

    constructor() {
        super();
    }


}

module.exports = FacebookClient;

