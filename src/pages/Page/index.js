import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import invariant from 'invariant';
import { BodyContainer, joinUri } from 'phenomic';

import Loading from '../../components/Loading';

import styles from './index.css';

const Page = (
  {
    isLoading,
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children,
  },
  {
    metadata: { pkg },
  }
) => {
  invariant(
    typeof head.title === 'string',
    `Your page '${ __filename }' needs a title`
  );

  const metaTitle = head.metaTitle ? head.metaTitle : head.title;

  const meta = [
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: metaTitle },
    {
      property: 'og:url',
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: 'og:description', content: head.description },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:creator', content: `@${ pkg.twitter }` },
    { name: 'twitter:description', content: head.description },
    { name: 'description', content: head.description },
  ];

  const headList = [];
  const headStyle = {};
  let headClass = styles.header;

  if (head.img) {
    headClass = styles.headerWImg;
    headStyle.backgroundImage = `url(${head.img})`;
  }
  if (head.bgcolor) {
    headClass = styles.headerWColor;
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
          arr.push(<a href={__url} className={styles.crumb}>{head.title}</a>);
        } else {
          // Generate the URL for this crumb
          // This would work for the above line, but we already had the __url
          let url = `/${parts.slice(0, i + 1).join('/')}/`;
          arr.push(<a href={url} className={styles.crumb}>{c}</a>);
          // Spacer
          arr.push(<span> &gt; </span>);
        }
        return arr;
      });
      crumbs.unshift(<a href='/' className={styles.crumb}>Home</a>, <span> &gt; </span>);
      headList.push(<nav className={styles.breadcrumbs}>{crumbs}</nav>);
    }
  }

  return (
    <div className={ styles.page }>
      <Helmet
        title={ metaTitle }
        meta={ meta }
      />
      <div className={headClass} style={headStyle}>{headList}</div>
      {
        isLoading
        ? <Loading />
        : <BodyContainer>{ body }</BodyContainer>
      }
      { children }
      { footer }
    </div>
  );
};

Page.propTypes = {
  isLoading: PropTypes.boolean,
  children: PropTypes.node,
  __filename: PropTypes.string.isRequired,
  __url: PropTypes.string.isRequired,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
};

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Page;
