import {test, expect} from '@playwright/test';


 test("TTA cart titile", async({page}) =>{
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await expect(page).toHaveTitle("TTA cart");
});