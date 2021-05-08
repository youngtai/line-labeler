import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const STARTER = '#74fded';
const ENDER = '#e09fff';
const NO_CLASS = '#c9c9c9';
const useStyles = makeStyles(theme => ({
  root: {
    margin: '10px',
  },
  imageLabel: {
    color: 'white',
    fontSize: '15px',
    margin: '15px',
  },
  line: {
    textAlign: 'left',
    margin: '5px',
  }
}));

// const onClick = () => {
//
// }

function LinesViewer({input}) {
  const classes = useStyles();

  const images = input.length > 0 ? input.map((imageData, imageIndex) => {
    const imageName = imageData.id;
    const lines = imageData.data.map(lineData => {
      const textColor = lineData.class === 1 ? {color: STARTER} :
          lineData.class === 2 ? {color: ENDER} :
          {color: NO_CLASS};
      return <div key={`${imageName}-line-${lineData.id}`}
                  className={classes.line}
                  style={textColor}>
        {lineData.text.join(' ')}
      </div>
    });

    return (
        <div>
          <div key={`${imageName}`}
               className={classes.imageLabel}>
            {imageName}
          </div>
          {lines}
        </div>
    );
  })
  : [];

  return (
      <div className={classes.root}>
        {images}
      </div>
  );
}

export default LinesViewer;
