import React, { PropTypes } from 'react';

import meta from '../../metadata';
// Poach styles from header, that way it only needs to be written once
import styles from '../Header/index.css';

const HeaderPreview = (
  {
    __url,
    title,
    img,
    bgcolor,
    layout,
    showType
  }
) => {
  const headList = [];
  const headStyle = {};
  let headClasses = [styles.header];

  if (showType) {
    if (meta.layoutNames[layout]) {
      headList.push(<p className={styles.type}>{meta.layoutNames[layout]}</p>);
      headClasses.push(styles.showsType);
    }
  }

  if (img) {
    headClasses.push(styles.headerWImg);
    headStyle.backgroundImage = `url(${img})`;
  } else if (bgcolor) {
    headClasses.push(styles.headerWColor);
    headStyle.backgroundColor = bgcolor;
  }
  if (title) {
    headList.push(<h1 className={ styles.heading } key="title">{ title }</h1>);
  }

  return (
      <div className={headClasses.join(' ')} style={headStyle} key={title}>{headList}</div>
  );
};

HeaderPreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default HeaderPreview;
