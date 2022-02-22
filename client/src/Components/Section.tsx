import React, { CSSProperties } from 'react';
import { makeStyles } from '@mui/styles';

type Props = {
  children: React.ReactNode;
  style?: CSSProperties;
};

const useStyles = makeStyles({
  section: {
    padding: '2rem',
  },
});

const Section: React.FC<Props> = ({ children, style }) => {
  const classes = useStyles();
  return (
    <div style={style} className={classes.section}>
      {children}
    </div>
  );
};

export default Section;
