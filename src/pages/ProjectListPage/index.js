import React, { PropTypes } from 'react';
import enhanceCollection from 'phenomic/lib/enhance-collection';

import Page from '../Page';
import HeaderList from '../../components/HeaderList';

const ProjectListPage = (props, { collection }) => {
  const projects = enhanceCollection(collection, {
    filters: [{ layout: 'Project'}, i=>!i.hidden],
    sort: 'date',
    reverse: true,
  });

  return (
    <Page { ...props }>
      <h2>{ 'List of Projects' }</h2>
      <HeaderList pages={ projects } />
    </Page>
  );
};

ProjectListPage.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default ProjectListPage;
