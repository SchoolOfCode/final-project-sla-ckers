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
    };
  },
};
const nextConfigWithPWA = withPWA(nextConfig);
const nextConfigWithPWAAndOffline = withOffline(nextConfigWithPWA);
module.exports = nextConfigWithPWAAndOffline;
