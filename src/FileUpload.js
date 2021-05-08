import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  Input
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    background: 'darkgrey',
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: 200
  }
}));

function FileUpload({onChange, allowedExtensions = [".json"]}) {
  const classes = useStyles();
  const uploadRef = React.useRef(null);

  function handleFileChange() {
    const fileList = uploadRef.current.files;
    const keys = Object.keys(fileList);
    const files = keys.map(k => {
      return {
        name: fileList[k].name,
        fileObj: fileList[k]
      }
    });
    onChange(files);
  }

  return (
      <div className={classes.root}>
        <FormControl variant="outlined" className={classes.formControl}>
          <Input
              inputRef={uploadRef}
              type="file"
              onChange={handleFileChange}
              onClick={event => event.target.value = null}
              inputProps={{multiple: true, accept: allowedExtensions.join(',')}}>
          </Input>
        </FormControl>
      </div>
  );
}

export default FileUpload;
