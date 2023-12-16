// import the original type declarations
import 'react-i18next';

// import all namespaces (for the default language, only)
import type commonES from '@public/locales/es/common.json';
declare module 'react-i18next' {
    // and extend them!
    interface CustomTypeOptions {
        // custom resources type
        resources: {
            common: typeof commonES;
        };
    }
}
