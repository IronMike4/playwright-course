import { test, expect } from '@playwright/test';
const path = require('path');

test.describe('Contact', () => {
    test('Upload File', async ({ page }) => {
        // open url
        await page.goto('https://practice.sdetunicorns.com/cart/');

        // provide test file path
        const filePath = path.join(__dirname, '../data/WhatsIncludedMobile.png');

        // upload test file 
        await page.setInputFiles('input#upfile_1',filePath);

        // click the submit button
        await page.locator('#upload_1').click();

        // assertion
        await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully');
    })
})
