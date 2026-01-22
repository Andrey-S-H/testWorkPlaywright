import { Page, Locator, expect } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly newTodoInput: Locator;
  readonly todoItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodoInput = page.locator('.new-todo');
    this.todoItems = page.locator('.todo-list li');
  }

  async goto(baseURL: string) {
    await this.page.goto(baseURL);
    await expect(this.page.locator('h1')).toHaveText('todos');
  }

  async createTodo(text: string) {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press('Enter');
    await expect(this.todoItems.last()).toHaveText(text);
  }

  async readTodo(index: number, expected: string) {
    await expect(this.todoItems.nth(index)).toHaveText(expected);
  }

  async updateTodo(index: number, newText: string) {
    const item = this.todoItems.nth(index);
    await item.dblclick();
    const editInput = item.locator('.edit');
    await editInput.fill(newText);
    await editInput.press('Enter');
    await expect(item).toHaveText(newText);
  }

  async deleteTodo(index: number) {
    const item = this.todoItems.nth(index);
    await item.hover();
    await item.locator('.destroy').click();
    await expect(item).toHaveCount(0);
  }
}
