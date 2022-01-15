import { makeStyles, createStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useUploadButtonStyles = makeStyles((theme) =>
  createStyles({
    input: {
      display: 'none',
    },
  })
);
export const UploadButton = (props) => {
    console.log("props name: ", props.name);
  const classes = useUploadButtonStyles();
  return (
    <label htmlFor={`upload-button-${props.name}`}>
      <input
        accept="image/*"
        className={classes.input}
        id={`upload-button-${props.name}`}
        name={props.name}
        multiple
        type="file"
        onChange={props.onChange}
      />
      <Button variant="contained" component="span" {...props}>
        {props.children}
      </Button>
      </label>
  );
};