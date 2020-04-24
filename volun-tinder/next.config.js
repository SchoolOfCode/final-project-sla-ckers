const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },

  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/quiz': { page: '/quiz' },
      '/knowledge-base': { page: '/knowledge-base' },
    };
  },
});
