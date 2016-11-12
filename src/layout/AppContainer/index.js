import React, { PropTypes } from 'react';

import './index.global.css';
import './highlight.global.css';

import Container from '../Container';
import DefaultHeadMeta from '../DefaultHeadMeta';
import Header from '../Header';
import Content from '../Content';

const AppContainer = (props) => (
  <Container>
    <DefaultHeadMeta />
    <Header />
    <Content>
      { props.children }
    </Content>
  </Container>
);

AppContainer.propTypes = {
  children: PropTypes.node,
};

export default AppContainer;
