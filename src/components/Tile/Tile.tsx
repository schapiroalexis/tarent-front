import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  cursor: {
    cursor: 'pointer',
    marginTop: '10px',
  },
});

type TileProps = {
  title: string;
  content: string;
  requestAction: () => void;
  id: string;
};

const Tile: React.FunctionComponent<TileProps> = ({ title, content, requestAction, id }) => {
  const classes = useStyles();
  return (
    <Card className={classes.cursor} onClick={requestAction} id={id}>
      <CardContent>
        <Typography className="title" color="textSecondary" gutterBottom aria-labelledby={title}>
          {title}
        </Typography>
        <Typography variant="body2" component={'span'} aria-labelledby={content}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Tile;
