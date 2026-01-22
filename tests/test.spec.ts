import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

test('opens app', async ({ page }) => {
  await page.goto(process.env.BASE_URL || 'http://localhost:3000');
  await expect(page).toHaveTitle(/React App/);
  console.log('test'); // ← ESLint поймает по правилу "no-console"
});

//npx playwright test test.spec.ts --debug
//"test": "npx playwright test tests/auth.spec.ts --headed"
