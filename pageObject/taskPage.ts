import { Page, Locator, expect } from '@playwright/test';

class TaskPage {
  private page: Page;
  private input: Locator;
  private toDoList: Locator;
  private delleteButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.input = this.page.getByRole('textbox', {
      name: 'What needs to be done?',
    });

    this.delleteButton = this.page.getByRole('button', { name: 'Delete' });
    this.toDoList = this.page.locator('ul.todo-list li');
  }

  async goTo(url: string) {
    await this.page.goto(url);
  }

  async createTask(name: string) {
    await this.input.fill(name);
    await this.page.keyboard.press('Enter');
  }

  async readTask(index: number, name: string) {
    await expect(this.toDoList.nth(index - 1)).toContainText(name);
  }

  async updateTask(index: number, newName: string) {
    const taskItem = this.toDoList.nth(index - 1);
    await taskItem.dblclick();
    const editInput = taskItem.locator('.edit');
    await editInput.fill(newName);
    await editInput.press('Enter');
    await expect(taskItem).toHaveText(newName);
  }

  async deleteTask(index: number) {
    const taskItem = this.toDoList.nth(index - 1);
    await taskItem.getByRole('button', { name: 'Delete' }).click();
  }
}

export default TaskPage;
