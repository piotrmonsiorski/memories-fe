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
  ThumbUpAltOutlined as ThumbUpAltOutlinedIcon,
  Delete as DeleteIcon,
  MoreHoriz as MoreHorizIcon,
} from '@material-ui/icons';
import { deletePost, likePost } from 'redux/actions/posts';
import useStyles from './styles';

const Post = ({ post, setEditedPost }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const handleLike = () => {
    dispatch(likePost(post._id));
  };
  const handleDelete = () => {
    dispatch(deletePost(post._id));
  };
  const handleEdit = () => {
    setEditedPost(post._id);
  };

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        like => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlinedIcon fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlinedIcon fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile || ' '}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creatorName}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>

      {user?.result?.googleId === post?.creatorId ||
        (user?.result?._id === post?.creatorId && (
          <div className={classes.overlay2}>
            <Button
              style={{ color: 'white' }}
              size="small"
              onClick={handleEdit}
            >
              <MoreHorizIcon fontSize="default" />{' '}
            </Button>
          </div>
        ))}
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
          <Button
            size="small"
            color="primary"
            onClick={handleLike}
            disabled={!user?.result}
          >
            <Likes />
          </Button>
          {user?.result?.googleId === post?.creatorId ||
            (user?.result?._id === post?.creatorId && (
              <Button size="small" color="primary" onClick={handleDelete}>
                <DeleteIcon fontSize="small" />
                Delete
              </Button>
            ))}
        </CardActions>
      </div>
    </Card>
  );
};

Post.propTypes = {};

export default Post;
