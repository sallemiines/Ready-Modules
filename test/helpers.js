'use strict';
const chai = require('chai');
chai.use(require('chai-string'));
global.expect = chai.expect;
global.social_connect = ["facebook", "twitter", "amazon", "google", "pinterest", "yahoo", "paypal", "linkedin", "microsoft", "foursquare", "github", "disqus", "dropbox", "wordpress", "tumblr", "vkontakte"];

const takeScreenshot = err => this.client.takeScreenshot().then(() => {
    throw err;
});

global.test = (name, instructions) => it(name, () => {
    return instructions().catch(takeScreenshot);
});

global.scenario = (name, tests, filename) =>
    describe(name, () => {
        const TowerClient = require('./clients/'+filename);
        const client = new TowerClient();
        before(() => this.client = client);
        tests(client);
        after(() => client.close());
    });
