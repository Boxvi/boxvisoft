const nextTranslate = require('next-translate-plugin');
const moduleExports = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['']
    },
    env: {

    },
    trailingSlash: false
}
module.exports = nextTranslate(moduleExports);

