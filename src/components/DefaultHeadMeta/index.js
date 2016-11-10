import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

const DefaultHeadMeta = (props, { metadata: { pkg } }) => (
  <div hidden>
    <Helmet
      meta={ [
        {
          name: 'generator', content: `${process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`
        },
        { property: 'og:site_name', content: pkg.name },
        { name: 'twitter:site', content: `@${ pkg.twitter }` },
        { name: 'theme-color', content: '#185500' },
        { name: 'msapplication-TileColor', content: '#185500' }
      ] }
      script={ [
        { src: 'https://cdn.polyfill.io/v2/polyfill.min.js' },
        {'type': 'application/javascript', 'innerHTML': '(function(l,o,a,d,e,r){d=o.head;function f(){a.forEach(function(u){r=o.createElement(\'link\');r.rel=\'stylesheet\';r.href=u;d.appendChild(r);});}e=requestAnimationFrame;if (e)e(f);else l.addEventListener(\'load\',f);}(window,document,[\'https://fonts.googleapis.com/css?family=Roboto+Mono\']));'}
      ] }
      link={[
        {rel: 'icon', sizes:'196x196', href: '/assets/icon.png'}
      ]}
    />

    { /* meta viewport safari/chrome/edge */ }
    <Helmet
      meta={[
        {name: 'viewport', content: 'width=device-width, initial-scale=1'}
      ]}
    />
    <style>{ '@-ms-viewport { width: device-width; }' }</style>
  </div>
);

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default DefaultHeadMeta;
