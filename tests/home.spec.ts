import { test, expect } from '@playwright/test';

test('TC 1 Home', async ({ page }) => {
  await page.goto('https://tdm2-demo.blackboard.com/');
  await page.getByRole('button', { name: 'OK' }).click();
  await Promise.all([
    await page.getByRole('link', { name: 'View Course Catalog' }).click(),
    page.waitForURL('https://us.tp.extensions.bb-fnds.com/tools/7f89e654-db0e-4bfa-9918-8f75a62c23e2/programView/lti')
  ]);
  const tdm = await page.getByText('Welcome to TDM');
  await expect(tdm).toBeVisible();


});

test('TC 2 CSS Element', async ({ page }) => {
  await page.goto('https://tdm2-demo.blackboard.com/');
  await page.getByRole('button', { name: 'OK' }).click();
  await Promise.all([
    await page.getByRole('link', { name: 'View Course Catalog' }).click(),
    page.waitForURL('https://us.tp.extensions.bb-fnds.com/tools/7f89e654-db0e-4bfa-9918-8f75a62c23e2/programView/lti')
  ]);
  const tdm = await page.getByText('Categories');
  await expect(tdm).toBeVisible();
  //Count Element of a list

  const listItems = page.locator('.react-multi-carousel-track');
  await listItems.waitFor({ timeout: 50000 });

  const itemCount = await page.locator('ul > li').count();
  console.log(`Número de elementos en la lista: ${itemCount}`);
});

test('TC 3 Log In', async ({ page }) => {
  await page.goto('https://tdm2-demo.blackboard.com/');
  // Espera a que aparezca el popup de cookies y haz clic en el botón de aceptar
  await page.getByRole('button', { name: 'OK' }).click();
  await expect(page.locator('button#agree_button')).not.toBeVisible();
  const imagen = page.locator('//*[@id="login-block"]/h1/img');
  await expect(imagen).toBeVisible();
  await page.getByText('Username').click();
  await page.getByLabel('Username').fill('userdemo');
  await page.getByText('Password', { exact: true }).click();
  await page.getByLabel('Password').fill('userdemo');
  await page.click('#entry-login');
  await page.waitForLoadState();
  //await page.waitForTimeout(60000);
});