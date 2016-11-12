import React from 'react';
import { Route } from 'react-router';
import { PageContainer as PhenomicPageContainer } from 'phenomic';

import AppContainer from './layout/AppContainer';
import Page from './pages/Page';
import PageError from './pages/PageError';
import Homepage from './pages/Homepage';
import Post from './pages/Post';
import Project from './pages/Project';
import ProjectListPage from './pages/ProjectListPage';

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Homepage,
      Post,
      Project,
      ProjectListPage,
    }}
  />
);

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
);
