/* eslint-disable class-methods-use-this */
import { API_URL } from '../constants/apiUrl';
import { ITask } from './models';

export class TaskApi {
  tasks: ITask[];

  constructor() {
    this.tasks = [];
  }

  async getAllTasks() {
    try {
      const response = await fetch(`${API_URL}tasks/`);
      const allTasks = await response.json();
      return allTasks;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async addTask(newTask: ITask) {
    try {
      const body = {
        newTask,
      };
      await fetch(`${API_URL}tasks/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.log(error);
    }
  }

  async deleteTask(taskId: number) {
    try {
      await fetch(`${API_URL}tasks/:${taskId}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.log(error);
    }
  }

  async updateTask(updatedTask: ITask) {
    try {
      const body = {
        updatedTask,
      };
      await fetch(`${API_URL}tasks/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.log(error);
    }
  }
}
