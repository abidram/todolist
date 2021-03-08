import {GET_TASK,ADD_TASK,REMOVE_TASK,TaskActionTypes,Task } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function GetTasks(data:any): TaskActionTypes {
  return {
    type: GET_TASK,
    data:data
  }
}

export function AddTask(task: any):TaskActionTypes {
  return {
    type: ADD_TASK,
    data:task
  }
}

export function RemoveTask(task: any):TaskActionTypes {
  return {
    type: REMOVE_TASK,
    data:task
  }
}