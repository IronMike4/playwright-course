import { test, expect } from '@playwright/test';
import { log } from 'console';

test.describe('Blog', () => {
    test('Verify Recent Posts count and verify the lenght of each list item', async ({ page }) => {
        // open blog page
        await page.goto('https://practice.sdetunicorns.com/blog/');

        // get the recent post list emelemnts
        const recentPostList = page.locator('#recent-posts-3 li')

        // loop through the list and assert the char length > 10
        for (const el of await recentPostList.elementHandles()){
            console.log((await el.textContent()))
            expect(((await el.textContent())?.trim())?.length).toBeGreaterThan(10)
        }

        // assert the totla length = 5
        expect(await recentPostList.count()).toEqual(5)

      
    })
    
    
})
