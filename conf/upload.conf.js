const getMediaUrl = require('./upload-media');

exports.config = {
    runner: 'local',

    capabilities: [
        {
            browserName: 'chrome',
            "bstack:options": {
                os: "Windows",
                osVersion: "11",
                browserVersion: "latest",
                idleTimeout: "300",
                uploadMedia: []
            },
        }
    ],

    onPrepare: async function (config, capabilities) {
        const mediaUrl = await getMediaUrl();
        console.log('Media URL fetched:', mediaUrl);

        // Inject media URL into capabilities
        capabilities.forEach(cap => {
            if (cap["bstack:options"] && Array.isArray(cap["bstack:options"].uploadMedia)) {
                cap["bstack:options"].uploadMedia.push(mediaUrl);
            }
        });

        console.log(JSON.stringify(capabilities));
    },

   

    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    runner: 'local',
    specs: [
        '../tests/specs/uploadFile_test.js'
    ],

    logLevel: 'warn',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 30000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    hostname: 'hub.browserstack.com',
    services: [['browserstack']],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000,
    },

};
