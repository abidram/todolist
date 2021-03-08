import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxHeight: 350, 
      overflow: 'auto'
    },
  }),
);
  export default function TabPanel(props: TabPanelProps) {
    const classes = useStyles();
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        className={classes.root}
      >
        {value === index && (
          <Box p={3} >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }