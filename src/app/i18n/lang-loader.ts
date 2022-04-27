import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { langFile as langGB } from './translations/langGB';
import { langFile as langSP } from './translations/lang-SP';

export const languages = {
  sp: 'sp',
  en: 'en',
};

export class LangLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<unknown> {
    return lang === languages.sp ? of(langGB) : of(langSP);
  }
}
