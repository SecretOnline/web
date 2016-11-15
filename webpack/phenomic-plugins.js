// Default plugins from phenomic
const loaderHeadConf = require('phenomic/lib/loader-plugin-init-head-property-from-config');
const loaderHeadContent = require('phenomic/lib/loader-plugin-init-head-property-from-content');
const loaderBodyContent = require('phenomic/lib/loader-plugin-init-body-property-from-content');
const loaderHeadDesc = require('phenomic/lib/loader-plugin-markdown-init-head.description-property-from-content');
const loaderMd = require('phenomic/lib/loader-plugin-markdown-transform-body-property-to-html');

module.exports = [
  loaderHeadConf.default,
  loaderHeadContent.default,
  loaderBodyContent.default,
  loaderHeadDesc.default,
  loaderMd.default
];
