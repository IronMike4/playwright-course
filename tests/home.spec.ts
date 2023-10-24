import { test, expect } from '@playwright/test';

test.describe('Home', () => {
    test('Open HomePage and verify title', async ({ page }) => {
        // open url
        await page.goto('https://practice.sdetunicorns.com/');

        // verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.')
    })
    
    test('Open About page and verify title', async ({ page }) => {
        // open url
        await page.goto('https://practice.sdetunicorns.com/about/');

        // verify title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site')
        
    })
    
})
