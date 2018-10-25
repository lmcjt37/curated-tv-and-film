const extractReactIntlMessages = require('extract-react-intl-messages');
const locales = ['en', 'es', 'de', 'fr'];
const pattern = '../web/src/**/!(*.test).js';
const buildDir = '../web/src/locales';
const defaultLocale = 'en';

extractReactIntlMessages(locales, pattern, buildDir, { defaultLocale }).then(
  () => {
    console.log('finish');
  }
);

