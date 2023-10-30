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

    test('Click get started button using CSS Selector', async ({ page }) => {
        // open url
        await page.goto('https://practice.sdetunicorns.com');

        // click the button 
        await page.locator('#get-started').click();

        // verify url has #get-started
        // await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');
        await expect(page).toHaveURL(/.*#get-started/);
        
    })

    test('Verify heading text is visible using text selector', async ({ page }) => {
        // open url
        await page.goto('https://practice.sdetunicorns.com');

        // find the text locator  
        const headingText = await page.locator('text= Think different. Make different.');

        // verify heading text is visible
        await expect(headingText).toBeVisible();
        
    })
    
})
