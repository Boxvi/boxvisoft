module.exports = {
    primaryLanguage: 'es',
    secondaryLanguages: ['en'],
    tertiaryLanguages : ['fr'],
    localesFolder: './public/locales',
    overridePluralRules: (pluralResolver) => pluralResolver.addRule('en', pluralResolver.getRule('es'),
        pluralResolver.getRule('fr') ), // This is available only when using config file
    spaces: 2
};
