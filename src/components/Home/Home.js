import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from 'redux/actions/posts';
import { Container, Grow, Grid } from '@material-ui/core';
import Posts from 'components/Posts';
import Form from 'components/Form';

const Home = () => {
  const [editedPost, setEditedPost] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [editedPost, dispatch]);

  return (
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
  );
};

Home.propTypes = {};

export default Home;
