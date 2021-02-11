import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import {
  ThumbUpAlt as ThumbUpAltIcon,
  Delete as DeleteIcon,
  MoreHoriz as MoreHorizIcon,
} from '@material-ui/icons';
import { deletePost, updatePost } from 'redux/actions/posts';
import useStyles from './styles';

const Post = ({ post, setEditedPost }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(updatePost(post._id, { ...post, likeCount: post.likeCount + 1 }));
  };
  const handleDelete = () => {
    dispatch(deletePost(post._id));
  };
  const handleEdit = () => {
    setEditedPost(post._id);
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile || ' '}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={handleEdit}>
          <MoreHorizIcon fontSize="default" />{' '}
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map(tag => (
            <span key={tag} className={classes.tag}>
              #{tag}
            </span>
          ))}
        </Typography>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {post.title}
        </Typography>
        <CardContent>
          <Typography
            className={classes.message}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {post.message}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={handleLike}>
            <ThumbUpAltIcon fontSize="small" />
            Like {post.likeCount}
          </Button>
          <Button size="small" color="primary" onClick={handleDelete}>
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

Post.propTypes = {};

export default Post;
