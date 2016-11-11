import React, { PropTypes } from 'react';

import Page from '../Page';

import styles from './index.css';

import meta from '../../metadata';

const pkg = meta.pkg;

const Project = (props) => {
  const url = props.head.github ? `https://github.com/${pkg.github}/${props.head.github}` : null;

  return (
    <Page
      { ...props }
      header={
        <div className={styles.time}>
          {url && <a href={url}>{`${pkg.github}/${props.head.github}`}</a>}
        </div>
      }
    />
  );
};

Project.propTypes = {
  head: PropTypes.object.isRequired,
};

export default Project;
