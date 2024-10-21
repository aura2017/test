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
  //await page.waitForTimeout(10000);
  await page.getByText('Sign up').click();
  const tdm = await page.getByText('Sign Up');
  await expect(tdm).toBeVisible();
  
}); 

test('TC 3 Fill the form', async ({ page }) => {
  await page.goto('https://tdm2-demo.blackboard.com/webapps/consulting-central/app/launch/TDMv2?locale=en-US');
  //await page.waitForTimeout(10000);
  await page.getByText('Sign up').click();
  const tdm = await page.getByText('Sign Up');
  await expect(tdm).toBeVisible();
  const iframe = page.frameLocator('#iframe-userWorkflowManager');

  // It's necessary to interact with the content in the iframe
  // sample, we need to localize an input in the iframe
  const emailInput = iframe.locator('input[name="email"]');
  await emailInput.fill('test1@example.com');
  const firstName = iframe.locator('input[name="firstName"]');
  await firstName.fill('Alan');
  const lastName = iframe.locator('input[name="lastName"]');
  await lastName.fill('Brito');
  const password = iframe.locator('input[name="password"]');
  await password.fill('12345678');
  const cpassword = iframe.locator('input[name="confirmPassword"]');
  await cpassword.fill('12345678');
  const check = iframe.locator('input[id="checkbox-policy"]');
  await check.click();
 
  const saveButton = iframe.locator('button:has-text("Save")');

  // Waiting till the button is enable
  await saveButton.waitFor({ state: 'visible', timeout: 10000 });
  await expect(saveButton).toBeEnabled(); // if it is
  // Click on the save button
  await saveButton.click();
  const a = await page.getByText('Create Account');
  await expect(a).toBeVisible();
}); 

test('TC 4 Error on the Form', async ({ page }) => {
  await page.goto('https://tdm2-demo.blackboard.com/webapps/consulting-central/app/launch/TDMv2?locale=en-US');
  //await page.waitForTimeout(10000);
  await page.getByText('Sign up').click();
  const tdm = await page.getByText('Sign Up');
  await expect(tdm).toBeVisible();
  //await page.waitForTimeout(60000);
  const iframe = page.frameLocator('#iframe-userWorkflowManager');

  // It's necessary to interact with the content in the iframe
  // sample, we need to localize an input in the iframe
  const emailInput = iframe.locator('input[name="email"]');
  await emailInput.fill('test1@example.com');
  const firstName = iframe.locator('input[name="firstName"]');
  await firstName.fill('Alan2');
  const lastName = iframe.locator('input[name="lastName"]');
  await lastName.fill('Brito2');
  const password = iframe.locator('input[name="password"]');
  await password.fill('12345678');
  const cpassword = iframe.locator('input[name="confirmPassword"]');
  await cpassword.fill('12345678');
  const check = iframe.locator('input[id="checkbox-policy"]');
  await check.click();
  const saveButton = iframe.locator('button:has-text("Save")');

  // The button shouldn't be enable because numeric numbers are not accepted in the first and last name fields
  await saveButton.waitFor({ state: 'visible', timeout: 10000 });
  await expect(saveButton).toBeEnabled(); //
  // Click on the save button
  await saveButton.click();
}); 