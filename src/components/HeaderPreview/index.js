import React, { PropTypes } from 'react';

// Poach styles from header, that way it only needs to be written once
import styles from '../Header/index.css';

const HeaderPreview = (
  {
    __url,
    title,
    img,
    bgcolor
  }
) => {
  const headList = [];
  const headStyle = {};
  let headClass = styles.header;

  if (img) {
    headClass = styles.headerWImg;
    headStyle.backgroundImage = `url(${img})`;
  }
  if (bgcolor) {
    headClass = styles.headerWColor;
    headStyle.backgroundColor = bgcolor;
  }
  if (title) {
    headList.push(<h1 className={ styles.heading }>{ title }</h1>);
  }

  return (
      <div className={headClass} style={headStyle} key={title}>{headList}</div>
  );
};

HeaderPreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default HeaderPreview;
