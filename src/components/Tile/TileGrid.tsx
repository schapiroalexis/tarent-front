import React from 'react';
import { Grid } from '@material-ui/core';
import Tile from './Tile';

type tileGridProps = {
  items: {
    id: string;
    title: string;
    content: string;
    requestAction: () => void;
  }[];
};

const TileGrid: React.FunctionComponent<tileGridProps> = ({ items }) => (
  <Grid container spacing={4}>
    {items.map(({ id, title, content, requestAction }) => (
      <Grid item key={id} xs={12} sm={6} md={4}>
        <Tile id={id} title={title} content={content} requestAction={requestAction}></Tile>
      </Grid>
    ))}
  </Grid>
);

export default TileGrid;
