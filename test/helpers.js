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

global.scenario = (name, tests, nameClass, close=false) =>
        describe(name, () => {
            const moduleClient = require('./clients/'+nameClass);
        const client = new moduleClient();
        before(() => this.client = client);
        tests(client);
        if(close){
            after(() => this.client.close());
        }
});
