import React, { PropTypes } from 'react';
import enhanceCollection from 'phenomic/lib/enhance-collection';

import Page from '../Page';
import HeaderList from '../../components/HeaderList';

const numberOfLatestPosts = 6;

const Homepage = (props, { collection }) => {
  let layout = props.head.listLayoutFilter;
  let sort = props.head.listSort || 'priority';
  let reverse = props.head.listReverse || false;

  let pages = enhanceCollection(collection, {
    filters: [{layout}, i=>!i.hidden],
    sort,
    reverse,
  });

  if (props.head.listNumPosts) {
    pages = pages.slice(0, props.head.listNumPosts);
  }

  return (
    <Page { ...props }>
      <HeaderList pages={ pages } />
    </Page>
  );
};

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default Homepage;
