const {selector} = require('../../globals.webdriverio.js');
const SocialConnect = require('./social-connect.js');

class CheckLogosClient extends SocialConnect {

    findFirstLogos(name) {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name), 90000)
            .pause(3000);
    }

    findSecondLogos(name) {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Common.second_logos.replace("%SOCIAL", name), 90000)
            .pause(3000);
    }

    findThirdLogos(name) {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Common.third_logos.replace("%SOCIAL", name), 90000)
            .pause(3000);
    }
}

module.exports = CheckLogosClient;

