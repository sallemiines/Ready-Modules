const common = require('./common.webdriverio');
const prepare = require('mocha-prepare');

process.on('uncaughtException', (err) => {
    console.error(err);
    common.take_screenshot();
});
process.on('ReferenceError', common.take_screenshot);

prepare(
    done => {
        common.getClient().call(done);
    },
    done => {
        common.getClient().end().call(done);
    }
);
