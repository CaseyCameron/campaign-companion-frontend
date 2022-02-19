import { makeStyles } from "@material-ui/core";
import { stepClasses } from "@mui/material";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
    
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(1),
    },
  },
  link: {
    // cursor: 'pointer',
  },
}));

export const useSearchStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiInputBase-input': {
      margin: theme.spacing(1),
      background: 'white',
      size: 'small',
      margin: .1,
      borderRadius: "7px"
    },
    '& .MuiSelect-root': {
      background: 'none',
    },
  },
  link: {
    cursor: 'pointer',
  },
}));
