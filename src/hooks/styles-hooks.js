import { makeStyles } from "@material-ui/core";

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
      margin: theme.spacing(2),
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
  },
  link: {
    cursor: 'pointer',
  },
}));
