import React, { PropTypes } from 'react';
import enhanceCollection from 'phenomic/lib/enhance-collection';

import Page from '../Page';
import HeaderList from '../../components/HeaderList';

const Homepage = (props, { collection }) => {
  let layouts = props.head.listLayoutFilter;
  if (!Array.isArray(layouts)) {
    layouts = [layouts];
  }

  let sort = props.head.listSort || 'priority';
  let reverse = props.head.listReverse || false;

  let pages = enhanceCollection(collection, {
    filters: [i=>layouts.indexOf(i.layout)>-1, i=>!i.hidden],
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
