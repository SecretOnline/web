import React, { PropTypes } from 'react';
import enhanceCollection from 'phenomic/lib/enhance-collection';

import Page from '../Page';
import PagesList from '../../components/PagesList';

const ProjectListPage = (props, { collection }) => {
  const projects = enhanceCollection(collection, {
    filters: [{ layout: 'Project'}, i=>!i.hidden],
    sort: 'date',
    reverse: true,
  });

  return (
    <Page { ...props }>
      <h2>{ 'List of Projects' }</h2>
      <PagesList pages={ projects } />
    </Page>
  );
};

ProjectListPage.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default ProjectListPage;
