const withCSS = require('@zeit/next-css')
global.navigator = () => null
if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {}
  require.extensions['.css'] = file => {}
}
module.exports = withCSS({
});