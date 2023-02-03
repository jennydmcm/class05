import test from "@playwright/test";

import ( test, devices, expect ) from '@playwright/test';

test.use((
    browserName: 'chromium',
    ...devices['iPad Air'],

))