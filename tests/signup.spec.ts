// @ts-check
const { test, expect } = require('@playwright/test');

test('TC1: Open Page', async ({ page }) => {
  await page.goto('https://tdm2-demo.blackboard.com/webapps/consulting-central/app/launch/TDMv2?locale=en-US');
  await page.waitForTimeout(10000);
 

  //await page.getByRole('link', { name: 'presentation' }).click()

  const tdm = await page.getByText('sign up');
  await expect(tdm).toBeVisible();

});

test('TC 2 Click on Sign up', async ({ page }) => {
  await page.goto('https://tdm2-demo.blackboard.com/webapps/consulting-central/app/launch/TDMv2?locale=en-US');
  await page.waitForTimeout(10000);
  await page.getByText('Sign up').click();
  //await page.waitForTimeout(60000);
  
  const tdm = await page.getByText('Sign Up');
  await expect(tdm).toBeVisible();
  
}); 