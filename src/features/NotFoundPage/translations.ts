import { translations } from 'locales/translations';
import { _t } from 'locales/messages';

export const notFound = {
  headMsg: () => _t(translations.notFound.headMsg, 'not found'),
  bodyMsg: () => _t(translations.notFound.bodyMsg, 'bad url'),
  bodyMsg2: () => _t(translations.notFound.bodyMsg2, 'take me back'),
};
