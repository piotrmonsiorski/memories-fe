import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from 'redux/actions/posts';
import useStyles from './styles';

const Form = ({ editedPost, setEditedPost }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const emptyPost = {
    title: '',
    message: '',
    creator: '',
    tags: [''],
    selectedFile: '',
  };
  const [postData, setPostData] = useState(emptyPost);
  const setPost = (key, value) => {
    setPostData({ ...postData, [key]: value });
  };

  const post = useSelector(state =>
    state.posts.find(post => post._id === editedPost)
  );
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clearForm = () => {
    setEditedPost(null);
    setPostData(emptyPost);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editedPost) {
      dispatch(updatePost(editedPost, postData));
    } else {
      console.log('postData: ', postData);
      dispatch(createPost(postData));
    }
    clearForm();
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={[classes.form, classes.root].join(' ')}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {editedPost ? 'Editing' : 'Creating'} a memory
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={e => setPost('creator', e.target.value)}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={e => setPost('title', e.target.value)}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={e => setPost('message', e.target.value)}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={e => setPost('tags', e.target.value.split(','))}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPost('selectedFile', base64)}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clearForm}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

Form.propTypes = {};

export default Form;
