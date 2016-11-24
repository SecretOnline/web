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

  let posts = enhanceCollection(collection, {
    filters: [i=>['Post','ThoughtOn'].indexOf(i.layout)>-1, i=>!i.hidden],
    sort,
    reverse,
  });
  if (props.head.listNumPosts) {
    posts = posts.slice(0, props.head.listNumPosts);
  }

  let projects = enhanceCollection(collection, {
    filters: [i=>['Project'].indexOf(i.layout)>-1, i=>!i.hidden],
    sort,
    reverse,
  });
  if (props.head.listNumPosts) {
    projects = projects.slice(0, props.head.listNumPosts);
  }

  return (
    <Page { ...props }>
      <h2>Latest Projects</h2>
      <HeaderList pages={ projects } />
      <h2>Latest Posts</h2>
      <HeaderList pages={ posts } />
    </Page>
  );
};

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default Homepage;
