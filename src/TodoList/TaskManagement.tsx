import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../Component/TabPanel/TabPanel'
import TaskList from './TaskList'
import {GetTasks,RemoveTask} from '../redux/actions'
import {taskTypePanel} from '../redux/types'
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TaskManagemnt() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="ToDo" {...a11yProps(1)} />
          <Tab label="Done" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >
      <TaskList GetTasks={GetTasks} removeTask={RemoveTask} TabTypes={taskTypePanel.All} />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <TaskList GetTasks={GetTasks} removeTask={RemoveTask} TabTypes={taskTypePanel.Todo} />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <TaskList GetTasks={GetTasks} removeTask={RemoveTask} TabTypes={taskTypePanel.Done} />
      </TabPanel>
    </div>
  );
}
