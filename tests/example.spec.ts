import { test, expect } from '@playwright/test';
import TaskPage from '../pageObject/taskPage';

const siteUrl = process.env.SITE_URL;

test('check crud', async ({ page }) => {
  const taskPage = new TaskPage(page);

  await taskPage.goTo(siteUrl!);

  await taskPage.createTask('TestTask');

  await taskPage.readTask(1, 'TestTask');

  await taskPage.updateTask(1, 'TestTaskUpdated');

  await taskPage.deleteTask(1);
});

//npx playwright test --debug
