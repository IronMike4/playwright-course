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
        const headingText = page.locator('text= Think different. Make different.');

        // verify heading text is visible
        await expect(headingText).toBeVisible();
        
    })
    
    test('Verify home link is enabled using text and css selector', async ({ page }) => {
        // open url
        await page.goto('https://practice.sdetunicorns.com');

        // find the home text
        // const homeText = await page.locator('#zak-primary-menu >> text=Home');
        const homeText = page.locator('#zak-primary-menu:has-text("Home")');

        // verify home text is enabled
        await expect(homeText).toBeEnabled();
        
    })

    test('Verify search icon is visible using xpath selector', async ({ page }) => {
        // open url
        await page.goto('https://practice.sdetunicorns.com');

        // find the search icon
        const searchIcon = page.locator("(//*[name()='svg'][@class='zak-icon zakra-icon--magnifying-glass'])[1]");

        // verify search icon is visible
        await expect(searchIcon).toBeVisible();
        
    })

    test('Verify text of all nav links', async ({ page }) => {
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];

        // open url
        await page.goto('https://practice.sdetunicorns.com');

        // find the nav links
        // const navLinks = page.locator('#zak-primary-menu li[id*=menu]');
        // const navLinks = page.locator('#zak-primary-menu li[id*=menu]').nth(3);
        const navLinks = page.locator('#zak-primary-menu li[id*=menu]');

        // print out all the links
        for(const el of await navLinks.elementHandles()){
            console.log(await el.textContent());
        }

        // verify nav links text
        // expect(await navLinks.allTextContents()).toEqual(expectedLinks);
        // expect(await navLinks.textContent()).toEqual(expectedLinks[3]);
        
    })
})
