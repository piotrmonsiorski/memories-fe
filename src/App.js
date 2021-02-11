import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from 'redux/actions/posts';
import Posts from 'components/Posts';
import Form from 'components/Form';
import memoriesUrl from 'images/memories.png';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const [editedPost, setEditedPost] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [editedPost, dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.heading}
          src={memoriesUrl}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setEditedPost={setEditedPost} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form editedPost={editedPost} setEditedPost={setEditedPost} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
