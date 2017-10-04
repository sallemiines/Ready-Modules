const common = require('./common.webdriverio');

process.on('uncaughtException', function(err) {
    console.error(err);
    // common.take_screenshot();
});
//process.on('ReferenceError', common.take_screenshot);
