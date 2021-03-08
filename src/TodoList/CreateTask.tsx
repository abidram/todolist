import React, { Fragment } from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme, createMuiTheme, ThemeProvider, fade } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import {AddTask} from '../redux/actions'
import {Task} from '../redux/types'
import Alert from '@material-ui/lab/Alert';
import Fade from '@material-ui/core/Fade';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(3),
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
                '& .MuiOutlinedInput-input':
                {
                    color: 'purple',
                    fontSize: "12px"
                }
            },
            '& .lebel-status': {
                marginTop: '30px',
                color: 'black',
                marginLeft: '10px'
            },
            '& .MuiFormControl-root':{
                marginLeft: '15px'
            },
            '& .MuiAlert-standardInfo':{
                marginTop:'-50px'
            }
        },
        button:{
          marginTop: '35px',
          backgroundColor:"#18ffff",
          '&:hover': {
            backgroundColor: "#1de9b6"

         },
          color:'black',
          display: 'flex',
          fontVariant: 'all-petite-caps',
          borderRadius: '2.2rem'
        },
        actioncontainer:{
            justifyContent: 'center',
            display: 'flex'
        }
    }),
);
const theme = createMuiTheme({
    palette: {
        primary: purple,

    },
});
export default function CreateTask() {
    const classes = useStyles();
    const [value, setValue] = React.useState('false');
    const [displayInfo, setDisplayInfo] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [titleError, setTitleError] = React.useState(false);
    const dispatch: Dispatch<any> = useDispatch()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle((event.target as HTMLInputElement).value);
        const title=(event.target as HTMLInputElement).value;
        if(title!='')
        setTitleError(false)
        else
        {
         setTitleError(true)
         return;
        }
    };
    const handleCreate =  () => {
       const min = Math.ceil(0);
       const max = Math.floor(1000);
        const newid= Math.floor(Math.random() * (max - min) + min); 
        if(title!='')
           setTitleError(false)
           else
           {
            setTitleError(true)
            return;
           }
     
        let task: Task = {
            id: newid,
            done: (Boolean)(value),
            title: title
        };
       
        dispatch( AddTask(task))
        reset()
      };
      function reset()
      {
        setDisplayInfo(true);
        setValue('false')
        setTitle('')
         setTimeout(()=>  setDisplayInfo(false),4000)
      }
    return (
        <div className={classes.root}>
           <Fade in={displayInfo} >
            <Alert severity="info" > New task registration completed successfully.</Alert>
            </Fade>

            <Typography gutterBottom variant="h5" component="h2">
                Add a new task
          </Typography>
            <form noValidate autoComplete="off">
            <Grid container >
                <ThemeProvider theme={theme}>
               
        <Grid item xs={12}>
                    <TextField
                    error={titleError}
                        id="outlined-helperText"
                        label="Task"
                        defaultValue=""
                        variant="outlined"
                        fullWidth
                        onChange={handleInputChange}
                        value={title}
                        helperText={!titleError?'':'The title field is required'}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <FormLabel  className="lebel-status" component="legend">status</FormLabel>
                    <FormControl component="fieldset">
                   
                        <RadioGroup aria-label="Statuse" name="statuseTask" value={value} onChange={handleChange}>
                            <FormControlLabel value="false" control={<Radio color="primary"/>} label="ToDo" />
                            <FormControlLabel value="true" control={<Radio  color="primary"/>} label="Done" />
                        </RadioGroup>
                    </FormControl>
                    </Grid>   
                </ThemeProvider>
                <Grid item xs={12} className={classes.actioncontainer}>
                <Button
                onClick={handleCreate}
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        create
      </Button>
      </Grid> 
      </Grid>
            </form>
        </div>
    );
}
