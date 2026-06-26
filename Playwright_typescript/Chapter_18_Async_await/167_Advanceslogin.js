import{test, expect} from '@playwright/test';

test("has title", async({page}) => {
    await page.goTo("https://playwright.dev/");
    await expect(page).toHaveTitle(/Playwright/);
});
