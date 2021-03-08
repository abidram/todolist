export interface Task {
    id: number
    title: string
    done: boolean
  }

  export enum taskTypePanel {
    All,
    Todo,
    Done
  }

  export interface TaskState {
    tasks: any
  }

  export const GET_TASK = 'GET_TASK'
  export const ADD_TASK = 'ADD_TASK'
  export const REMOVE_TASK = 'REMOVE_TASK'
  interface TaskAction {
    type: string,
    data:any
  }

  export type TaskActionTypes =TaskAction

  export type DispatchType = (args: TaskActionTypes) => TaskActionTypes

  export type TabTypes =taskTypePanel