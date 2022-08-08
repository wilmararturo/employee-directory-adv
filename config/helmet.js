const helmet = require("helmet");

const ContentSecurityPolicy = helmet.contentSecurityPolicy();

module.exports = ContentSecurityPolicy;
