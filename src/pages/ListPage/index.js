import React, { PropTypes } from 'react';
import enhanceCollection from 'phenomic/lib/enhance-collection';

import Page from '../Page';
import HeaderList from '../../components/HeaderList';

const Homepage = (props, { collection }) => {
  let filters = [];
  let hf = props.head.listFilter;

  if (!hf.showHidden) {
    filters.push(i=>!i.hidden);
  }

  if (hf.layout) {
    let layouts = hf.layout;
    if (!Array.isArray(layouts)) {
      layouts = [layouts];
    }
    filters.push(i=>layouts.indexOf(i.layout)>-1);
  }

  if (hf.path) {
    let paths = hf.path;
    if (!Array.isArray(paths)) {
      paths = [paths];
    }
    filters.push(i=>paths.indexOf(i.__url)>-1);
  }

  let sort = hf.sort || 'priority';
  let reverse = hf.reverse || false;
  let enhancer = {
    filters,
    sort,
    reverse
  };

  if (hf.limit) {
    enhancer.limit = hf.limit;
  }

  let pages = enhanceCollection(collection, enhancer);

  let elProps = {
    pages
  };
  if (hf.showTypes) {
    elProps.showTypes = true;
  }

  return (
    <Page { ...props }>
      <HeaderList {...elProps} />
    </Page>
  );
};

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default Homepage;
