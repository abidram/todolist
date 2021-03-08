import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import TaskService from '../services/taskService'
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import {Task,TaskState,TabTypes,taskTypePanel} from '../redux/types'
import { Dispatch } from "redux"
import { debounce } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);
type Props = {
  GetTasks: (data: any) => void,
  removeTask:(task: Task) => void,
  TabTypes:TabTypes
}
 const TaskList: React.FC<Props> = ({ GetTasks,removeTask,TabTypes }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const taskApi=new TaskService<any>();
  
  const dispatch: Dispatch<any> = useDispatch()
  let tasks: any = useSelector(
    (state: TaskState) => state.tasks,
    shallowEqual
  );
 debugger

  React.useEffect(() => {

    fetchData()

  }, []);

  function fetchData() {
    taskApi.get().then(d=>{
      const result=getDatabyTpe(d.data)
      dispatch(GetTasks(result))
    });
  }  

  function getDatabyTpe(data:any)
  {
    switch(TabTypes)
    {
       case taskTypePanel.All:
         {
          return data;
          
         }
         case taskTypePanel.Done:
           {
            return  data.filter((item:Task) => item.done==true)
         
           }
           case taskTypePanel.Todo:
            {
              debugger
              return   data.filter((item:Task) => item.done==false)
          
            }
            default:
              break;
    }

  }
  
  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const handleRemoveClick = (value:Task) => () => {
    
    dispatch( removeTask(value));
    alert("remove task was successfull")
  
  }
  return (
    <List className={classes.root}>
      {tasks.map((task:any) => {

        const labelId = `checkbox-list-label-${task.id}`;

        return (
          <ListItem key={task.id} role={undefined} dense button onClick={handleToggle(task.id)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(task.id) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`${task.title}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments" onClick={handleRemoveClick(task)}>
                <Close />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}

export default TaskList;