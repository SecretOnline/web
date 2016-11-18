import React, { PropTypes } from 'react';

import Page from '../Page';

import styles from './index.css';

const Post = (props) => {
  let {head} = props;

  // it's up to you to choose what to do with this layout ;)
  const pageDate = head.date ? new Date(head.date) : null;

  return (
    <Page
      { ...props }
      header={
        <div className={styles.time}>
          {
          pageDate &&
          <em><time key={ pageDate.toISOString() }>
            { pageDate.toDateString() }
          </time></em>
        }
        </div>
      }
    />
  );
};

Post.propTypes = {
  head: PropTypes.object.isRequired,
};

export default Post;
