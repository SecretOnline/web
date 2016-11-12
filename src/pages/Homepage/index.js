import React, { PropTypes } from 'react';
import enhanceCollection from 'phenomic/lib/enhance-collection';

import Page from '../Page';
import HeaderList from '../../components/HeaderList';

const numberOfLatestPosts = 6;

const Homepage = (props, { collection }) => {
  const latestPosts = enhanceCollection(collection, {
    filters: [{ layout: 'Post'}, i=>!i.hidden],
    sort: 'date',
    reverse: true,
  })
  .slice(0, numberOfLatestPosts);

  return (
    <Page { ...props }>
      <h2>{ 'Latest Posts' }</h2>
      <HeaderList pages={ latestPosts } />
    </Page>
  );
};

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default Homepage;
