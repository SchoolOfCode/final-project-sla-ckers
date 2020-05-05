const withPWA = require("next-pwa");
const withOffline = require("next-offline");

const nextConfig = {
  pwa: {
    dest: "public",
  },

  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/quiz": { page: "/quiz" },
      "/knowledge-base": { page: "/knowledge-base" },
      "/org-dashboard": { page: "/org-dashboard" },
      "/orgslist": { page: "/orgslist" },
    };
  },
};

const nextConfigWithPWA = withPWA(nextConfig);
const nextConfigWithPWAAndOffline = withOffline(nextConfigWithPWA);

module.exports = nextConfigWithPWAAndOffline;
