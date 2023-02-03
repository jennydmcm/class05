const ( devices ) = require('@playwright/test');

/** @type {import('playwright/test').PlaywrightTestConfig} */

const config = {
    //Optionn shared for all projects
    timeout: 30000,
    use: {
        ignoreHTTPSErrors: true,
    },

    //
}