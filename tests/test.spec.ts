import { test } from '@playwright/test';
import * as dotenv from 'dotenv';
import { TodoPage } from '../pages/TodoPage';

dotenv.config();

const BASE_URL =
  process.env.BASE_URL || 'https://demo.playwright.dev/todomvc/#/';

test.describe('TodoMVC CRUD', () => {
  test('Create, Read, Update, Delete todo', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.goto(BASE_URL);

    await todoPage.createTodo('Buy milk');
    await todoPage.readTodo(0, 'Buy milk');
    await todoPage.updateTodo(0, 'Buy almond milk');
    await todoPage.deleteTodo(0);
  });
});

//npx playwright test test.spec.ts --debug
//"test": "npx playwright test tests/auth.spec.ts --headed"
