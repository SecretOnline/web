import React from 'react';
import { Route } from 'react-router';
import { PageContainer as PhenomicPageContainer } from 'phenomic';

import AppContainer from './layout/AppContainer';
import Page from './pages/Page';
import PageError from './pages/PageError';
import Post from './pages/Post';
import Project from './pages/Project';
import ListPage from './pages/ListPage';
import ThoughtOn from './pages/ThoughtOn';

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Post,
      Project,
      ListPage,
      ThoughtOn
    }}
  />
);

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
);
