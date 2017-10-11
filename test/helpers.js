const TowerClient = require('./tower-client');
const chai = require('chai');
chai.use(require('chai-string'));
global.expect = chai.expect;

const takeScreenshot = err => this.client.takeScreenshot().then(() => {
    throw err;
});

global.test = (name, instructions) => it(name, () => instructions().catch(takeScreenshot));

global.scenario = (name, tests) =>
    describe(name, () => {
        const client = new TowerClient();
        before(() => this.client = client);
        tests(client);
        after(() => client.close());
    });
