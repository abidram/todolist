import {
    GET_TASK,
    ADD_TASK,
    REMOVE_TASK,
    TaskState,
    TaskActionTypes,
    Task
  } from './types'

  const initialState: TaskState = {
    tasks:[]
  }

   function TaskReducer(
    state = initialState,
    action: TaskActionTypes
  ): TaskState {
    switch (action.type) {
      case GET_TASK:
          {
            state.tasks=[];
            return {
                tasks: state.tasks.concat(action.data)
            }
          }
      
        case ADD_TASK:
            {
            return {
                tasks: state.tasks.concat(action.data)
            }
        }
            case REMOVE_TASK:
                {
                    return {
                        tasks:  state.tasks.filter((item:Task) => item.id !== action.data.id)
                    }
                }
           
      default:
        return state
    }
  }

  export default TaskReducer