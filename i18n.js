module.exports = {
    locales: ['es', 'en', 'fr'],
    defaultLocale: 'es',
    pages: {
        '*': ['common', 'zod'] // Namespaces that you want to import per page (we stick to one namespace for all the application in this tutorial)
    },
    defaultNS: 'common'
};
