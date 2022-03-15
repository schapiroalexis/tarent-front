import { translations } from 'locales/translations';
import { _t } from 'locales/messages';

export const unauthorized = {
  headMsg: () => _t(translations.unauthorized.headMsg, 'unauthorized'),
  bodyMsg: () => _t(translations.unauthorized.bodyMsg, 'outOfScope'),
};
