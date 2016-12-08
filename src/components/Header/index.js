import React, { PropTypes } from 'react';
import {Link} from 'phenomic';

import styles from './index.css';

const Header = (
  {
    __url,
    head,
    header
  }
) => {
  const headList = [];
  const headStyle = {};
  let headClasses = [styles.header];

  if (head.img) {
    headClasses.push(styles.headerWImg);
    headStyle.backgroundImage = `url(${head.img})`;
  } else if (head.bgcolor) {
    headClasses.push(styles.headerWColor);
    headStyle.backgroundColor = head.bgcolor;
  }
  if (head.title) {
    headList.push(<h1 className={ styles.heading }>{ head.title }</h1>);
  }
  if (header) {
    headList.push(header);
  }

  // Breadcrumbs
  if (__url) {
    // Split url, remove first and last empty string
    let parts = __url.split('/');
    parts.shift();
    parts.pop();
    // If there's no crumbs, don't do anything
    if (parts.length) {
      let crumbs = parts.map((c,i)=>{
        let arr = [];
        if (i + 1 === parts.length) {
          // Final one, replace with page title
          arr.push(<Link to={__url} className={styles.crumb}>{head.title}</Link>);
        } else {
          // Generate the URL for this crumb
          // This would work for the above line, but we already had the __url
          let url = `/${parts.slice(0, i + 1).join('/')}/`;
          arr.push(<Link to={url} className={styles.crumb}>{c}</Link>);
          // Spacer
          arr.push(<span> &gt; </span>);
        }
        return arr;
      });
      crumbs.unshift(<Link to='/' className={styles.crumb}>Home</Link>, <span> &gt; </span>);
      headList.push(<nav className={styles.breadcrumbs}>{crumbs}</nav>);
    }
  }

  return (
      <div className={headClasses.join(' ')} style={headStyle}>{headList}</div>
  );
};

Header.propTypes = {
  __url: PropTypes.string.isRequired,
  head: PropTypes.object.isRequired,
  header: PropTypes.element
};

export default Header;
