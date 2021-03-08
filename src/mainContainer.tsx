import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TabManagemt from './TodoList/TaskManagement' 
import CreateTask from './TodoList/CreateTask'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        marginLeft:theme.spacing(20),
        marginTop:theme.spacing(20),
        width: theme.spacing(110),
       height: theme.spacing(50),
      },
    },
    paper:{
      height: theme.spacing(50),
    }
  }),
);

function MainContainer() {

  const classes = useStyles();


  return (
    <div className={classes.root}>
    <Grid container >
    
      <Grid item xs={6}>
        <Paper className={classes.paper} ><TabManagemt /></Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper  className={classes.paper} >
        <CreateTask/>

        </Paper>
      </Grid>
     
    </Grid>
  </div>
  );
}

export default MainContainer;
